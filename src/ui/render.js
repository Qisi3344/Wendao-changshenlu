function button(kind, id, title, desc) {
  return `<button class="${kind}" data-${kind}-id="${id}"><strong>${title}</strong><small>${desc}</small></button>`;
}

export function render(app, router, state) {
  const current = router.current;
  const children = current.children ?? [];
  const actions = current.actions ?? [];

  app.innerHTML = `
    <section class="world-frame">
      <header class="topbar">
        <div class="topbar-left">
          <button class="back" ${current.parent ? "" : "hidden"} aria-label="返回上一层">〈 返回</button>
          <div class="crumb">${current.title}</div>
        </div>
        <div class="time">景和${state.time.year}年 · ${state.time.month}月 · ${state.time.hour}时　｜　${state.player.rank} · ${state.player.realm}</div>
      </header>

      <section class="scene">
        <div>
          <h1>${current.title.split(" · ").at(-1)}</h1>
          <p>${current.subtitle ?? ""}</p>
        </div>
        ${children.length ? `<div class="location-grid">${children.map(x => button("location", ...x)).join("")}</div>` : ""}
        ${actions.length ? `<div class="action-list">${actions.map(x => button("action", ...x)).join("")}</div>` : ""}
      </section>
    </section>`;
}
