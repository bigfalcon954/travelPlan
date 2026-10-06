# travelPlan

旅行のスケジュールをまとめた静的HTMLページ集です。`index.html` から各ページへ移動できます。

| ページ | 内容 |
|---|---|
| `index.html` | 旅行一覧（トップ） |
| `canada.html` | カナダ旅行スケジュール（2025/12/27〜2026/1/3） |
| `vietnam.html` | ベトナム旅行スケジュール（2025/9/10〜9/14） |
| `vietnam-flights.html` | ベトナム旅行 帰りの飛行機候補 |

`Plane.html` / `schedule.html` は旧URLで、新しいページへ自動で転送します。

## 構成

- `common.css` … 全ページ共通のスタイル（ダークモード・印刷用スタイル含む）。各ページの `<style>` では色変数（`--primary` など）だけを指定する
- `countdown.js` … ヒーロー部分の `.countdown` 要素に「出発まで／旅行中／終了」を表示する。`data-start` と `data-end` に ISO 8601 形式の日時を指定する

## 新しい旅行ページを追加するとき

1. 既存のスケジュールページ（例：`vietnam.html`）をコピーする
2. `:root` の色変数、タイトル、OGP、`data-start` / `data-end` を書き換える
3. `index.html` に旅行カードを追加する
