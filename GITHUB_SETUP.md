# GitHub にアップロードする手順

このプロジェクトを GitHub に上げて、チームで共同開発を始めるための手順です。
すでに最初のコミットは作成済みなので、リモートに繋いで push するだけです。

## 1. GitHub でリポジトリを作る

1. https://github.com/new を開く
2. リポジトリ名（例: `campus-trade`）を入力
3. **README や .gitignore は追加しない**（このプロジェクトに既にあるため）
4. 「Create repository」を押す

## 2. このプロジェクトをリモートに繋いで push

ダウンロードしたフォルダ（`campus-trade-app`）の中で、ターミナルから実行します。

```bash
cd campus-trade-app

# （まだ git 管理していない場合のみ）
git init
git add -A
git commit -m "初期コミット"

# GitHub のリポジトリURLに置き換えてください
git remote add origin https://github.com/<あなたのユーザー名>/campus-trade.git
git branch -M main
git push -u origin main
```

> このフォルダにすでに `.git` が含まれている場合は、`git init` と最初の `commit` は不要です。
> `git remote add origin ...` から実行してください。

## 3. チームメンバーを招待する

GitHub のリポジトリページで **Settings → Collaborators** から、一緒に開発する人の
GitHub アカウントを追加します。招待された人は次のようにして開発を始められます。

```bash
git clone https://github.com/<あなたのユーザー名>/campus-trade.git
cd campus-trade
# あとは README のクイックスタートへ
```

## 4. これ以降の進め方

- 機能ごとにブランチを切って Pull Request を出します（詳しくは [CONTRIBUTING.md](./CONTRIBUTING.md)）。
- push すると GitHub Actions（`.github/workflows/ci.yml`）が自動でビルド確認を行います。

## 補足: 秘密情報を push しないこと

`server/.env` には JWT の秘密鍵やメール送信のパスワードが入ります。
このファイルは `.gitignore` で除外済みなので GitHub には上がりません。
チームで共有するときは `.env` の中身を、コードとは別の安全な方法（パスワード共有ツールなど）で渡してください。
