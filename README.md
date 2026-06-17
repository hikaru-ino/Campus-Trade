# Campus Trade

慶應義塾大学の学生同士で、各授業の教科書を **安く・早く・安全に対面取引** するための Web アプリです。
学内ドメイン（`@keio.jp`）のメール認証で、同じ大学の学生だけが利用できます。

> 大学の演習・卒業制作向けのプロジェクトです。自前の Node.js + SQLite バックエンドと React フロントエンドで構成されています。

---

## 主な機能

- **大学メール認証** — `@keio.jp` 宛に確認コードを送信し、コードを検証してから登録（ドメイン限定ログイン）
- **教科書の出品** — 授業ごとに、**販売（固定価格）** か **オークション（入札形式）** を選んで出品
- **検索・絞り込み** — 学部 / 学年 / 授業特性 / キーワードで絞り込み
- **商品詳細** — 状態・書き込みの有無・出品者評価・受け渡しスポットを確認
- **取引チャット** — 出品者と値引き交渉や日程調整
- **待ち合わせ場所設定** — 学内の受け渡しスポットを取引ごとに設定
- **取引完了 → レビュー** — 取引相手を 5 段階で相互評価

---

## 技術スタック

| 層 | 技術 |
|----|------|
| フロントエンド | React 18 + Vite + React Router + Tailwind CSS |
| バックエンド | Node.js + Express |
| データベース | SQLite（`better-sqlite3`）※ PostgreSQL に移行しやすい構成 |
| 認証 | JWT + メール確認コード |
| メール送信 | 開発時はコンソール出力（モック）／ 本番は SMTP（nodemailer） |

---

## クイックスタート

前提: **Node.js 18 以上** がインストールされていること。

```bash
# 1. リポジトリを取得
git clone https://github.com/<your-org>/campus-trade.git
cd campus-trade

# 2. バックエンド
cd server
cp .env.example .env        # 必要に応じて値を編集
npm install
npm run seed                # サンプルデータ投入（任意）
npm run dev                 # http://localhost:4000

# 3. フロントエンド（別ターミナルで）
cd ../client
npm install
npm run dev                 # http://localhost:5173
```

ブラウザで http://localhost:5173 を開きます。

### ログインの流れ（開発時）

1. ログイン画面で `自分の名前@keio.jp` を入力
2. **サーバーのコンソール**に 6 桁の確認コードが表示されます（開発時はメールを実送信しません）
3. そのコードを画面に入力するとログイン完了

> 本番でメールを実送信するには、`server/.env` の `MAIL_MODE=smtp` と SMTP 設定を埋めてください。

---

## ディレクトリ構成

```
campus-trade/
├── server/                 # バックエンド (Express + SQLite)
│   ├── src/
│   │   ├── index.js        # エントリポイント
│   │   ├── db.js           # DB 接続・スキーマ
│   │   ├── seed.js         # サンプルデータ
│   │   ├── lib/            # 認証・メールなどの共通処理
│   │   └── routes/         # API ルート (auth, listings, chat, reviews...)
│   └── .env.example
├── client/                 # フロントエンド (React + Vite)
│   └── src/
│       ├── pages/          # 画面コンポーネント
│       ├── components/     # 共通 UI
│       └── lib/            # API クライアント・認証コンテキスト
└── .github/workflows/      # CI（lint / build チェック）
```

---

## チームでの開発の進め方

[CONTRIBUTING.md](./CONTRIBUTING.md) に、ブランチ運用・Pull Request・担当分けの目安をまとめています。
はじめての人はまずそちらを読んでください。

## ライセンス

学内利用を想定した学習用プロジェクトです。
