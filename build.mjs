#!/usr/bin/env node
// data.json を index.html の <script id="embedded-data"> ブロックに流し込む。
// 使い方: node build.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const dir = dirname(fileURLToPath(import.meta.url));
const data = readFileSync(join(dir, "data.json"), "utf8").trim();
let html = readFileSync(join(dir, "index.html"), "utf8");

const open = '<script id="embedded-data" type="application/json">';
const close = "</script>";
const start = html.indexOf(open);
if (start === -1) { console.error("embedded-data ブロックが見つかりません"); process.exit(1); }
const end = html.indexOf(close, start);
const before = html.slice(0, start + open.length);
const after = html.slice(end);
html = before + "\n" + data + "\n" + after;

writeFileSync(join(dir, "index.html"), html);
const n = (JSON.parse(data).items || []).length;
console.log(`✅ build 完了: ${n}件を index.html に同梱しました`);
