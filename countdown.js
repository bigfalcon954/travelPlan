// .countdown 要素の data-start / data-end（ISO 8601）から
// 「出発まで」「旅行中」「終了」を出し分けて表示する。
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.countdown');
  if (!el) return;

  const start = new Date(el.dataset.start).getTime();
  const end = new Date(el.dataset.end).getTime();
  let timer = null;

  function tick() {
    const now = Date.now();

    if (now >= end) {
      el.textContent = 'この旅行は終了しました。お疲れさまでした！';
      if (timer !== null) clearInterval(timer);
      return false;
    }

    if (now >= start) {
      // 日数は出発日（日本時間）の0時から数える
      const JST_OFFSET = 9 * 3600000;
      const startDay = start - ((start + JST_OFFSET) % 86400000);
      const day = Math.floor((now - startDay) / 86400000) + 1;
      el.textContent = `旅行中！（${day}日目）`;
      return true;
    }

    let diff = start - now;
    const d = Math.floor(diff / 86400000);
    diff %= 86400000;
    const h = Math.floor(diff / 3600000);
    diff %= 3600000;
    const m = Math.floor(diff / 60000);
    el.textContent = `出発まであと ${d}日 ${h}時間 ${m}分`;
    return true;
  }

  if (tick()) timer = setInterval(tick, 60000);
});
