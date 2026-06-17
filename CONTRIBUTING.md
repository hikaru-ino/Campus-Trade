# コントリビューションガイド

チームで開発するときのルールです。みんなが同じやり方で進められるよう、まずこれを読んでください。

## 開発環境の準備

README の「クイックスタート」を見て、`server` と `client` の両方を起動できる状態にしてください。

## ブランチ運用（GitHub Flow）

`main` ブランチには直接 push しません。必ずブランチを切って、Pull Request 経由でマージします。

```bash
# main を最新にする
git checkout main
git pull origin main

# 作業用ブランチを切る（feature/ 機能名 の形）
git checkout -b feature/listing-form

# 変更をコミット
git add .
git commit -m "出品フォームに販売/オークション切り替えを追加"

# リモートに push
git push origin feature/listing-form
```

push したら GitHub 上で Pull Request を作成し、最低 1 人のレビューを受けてから `main` にマージします。

### ブランチ名の付け方

| 種類 | プレフィックス | 例 |
|------|----------------|----|
| 新機能 | `feature/` | `feature/auction-bidding` |
| バグ修正 | `fix/` | `fix/login-validation` |
| ドキュメント | `docs/` | `docs/update-readme` |

### コミットメッセージ

日本語で構いません。「何をしたか」が分かるように書きます。

- 良い例: `検索画面に学部の絞り込みを追加`
- 避けたい例: `更新`、`修正`、`wip`

## Pull Request のときに確認すること

- [ ] `server` と `client` が両方エラーなく起動する
- [ ] 自分が触った画面・APIが実際に動く
- [ ] コンソールに不要な `console.log` を残していない
- [ ] 何を変更したか PR の説明に書いた

## 担当分けの目安

機能ごとに分担すると衝突しにくいです。参考までに:

| 領域 | 主なファイル |
|------|------------|
| 認証・ログイン | `server/src/routes/auth.js` / `client/src/pages/Login.jsx` |
| 出品（販売・オークション） | `server/src/routes/listings.js` / `client/src/pages/NewListing.jsx` |
| 検索・絞り込み | `client/src/pages/Search.jsx` |
| 商品詳細・入札 | `client/src/pages/Listing.jsx` |
| チャット・取引 | `server/src/routes/chat.js` / `client/src/pages/Chat.jsx` |
| レビュー | `server/src/routes/reviews.js` |

## 困ったら

- API の仕様は `server/src/routes/` の各ファイル冒頭コメントを見てください。
- DB のテーブル構成は `server/src/db.js` にまとまっています。
