# 🔥 Buzz Radar — 週刊バズ・ダッシュボード

X(Twitter) を起点に、TikTok / Reddit / 中国メディア(微博・小紅書・Bilibili) / 国内まとめ系(Togetter・バズイート等) を横断して、**直近1週間で急に現象化しているもの**（新興サービス・キャラクター・イベント・ミーム・楽曲・人物）をジャンル別に一覧表示するシンプルな静的Webアプリ。

## 特徴
- 🇯🇵 国内 / 🌎 海外 / 🇨🇳 中国 の地域タブ
- ジャンル（サービス/キャラ/イベント/ミーム/楽曲/人物/トピック）で複数絞り込み
- キーワード検索、勢い🔥順ソート
- 各項目に出典リンク付き
- 依存ゼロ（HTML/CSS/JS のみ）

## 使い方（ローカル）
```bash
cd buzz-radar
python3 -m http.server 8777
# ブラウザで http://localhost:8777 を開く
```

## データ更新
`data.json` を差し替えるだけ。`index.html` は触らなくてOK。

```json
{
  "period": "2026-05-30 〜 2026-06-06",
  "updated": "2026-06-06",
  "items": [
    {
      "region": "jp | global | cn",
      "genre": "service | character | event | meme | music | person | topic",
      "hot": 1-5,
      "title": "見出し",
      "summary": "何が・なぜ今バズっているか（1〜2文）",
      "links": [{ "label": "出典名", "url": "https://..." }]
    }
  ]
}
```

## デプロイ
静的サイトなので Vercel / Netlify / GitHub Pages にそのまま置けます。

---
🤖 Generated with [Claude Code](https://claude.com/claude-code)
