#!/usr/bin/env node

import { readFile } from "node:fs/promises";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const toolsBlock = html.match(/const TOOLS = \[([\s\S]*?)\n    \];\n\n    const state/);
if (!toolsBlock) throw new Error("无法在 index.html 中找到 TOOLS 数据");
const urls = [...new Set([...toolsBlock[1].matchAll(/url:"(https?:\/\/[^\"]+)"/g)].map(match => match[1]))];
const guarded = new Set([401, 403, 405, 429]);

async function check(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "Mozilla/5.0 GinaAI-Link-Audit/1.0" }
    });
    const status = response.status;
    return {
      url,
      finalUrl: response.url,
      status,
      level: status < 400 ? "ok" : guarded.has(status) ? "guarded" : "failed"
    };
  } catch (error) {
    return { url, status: 0, level: "uncertain", error: error.name === "AbortError" ? "timeout" : error.message };
  } finally {
    clearTimeout(timer);
  }
}

const results = [];
for (let index = 0; index < urls.length; index += 8) {
  results.push(...await Promise.all(urls.slice(index, index + 8).map(check)));
}

for (const result of results) {
  const icon = { ok: "✓", guarded: "△", uncertain: "?", failed: "✗" }[result.level];
  const detail = result.status || result.error;
  const moved = result.finalUrl && result.finalUrl !== result.url ? ` → ${result.finalUrl}` : "";
  console.log(`${icon} ${String(detail).padEnd(7)} ${result.url}${moved}`);
}

const summary = Object.groupBy(results, result => result.level);
console.log("\nSummary", {
  total: results.length,
  ok: summary.ok?.length ?? 0,
  guarded: summary.guarded?.length ?? 0,
  uncertain: summary.uncertain?.length ?? 0,
  failed: summary.failed?.length ?? 0
});

if (summary.failed?.length) process.exitCode = 1;
