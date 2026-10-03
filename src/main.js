import { state } from "./core/state.js";
import { WorldRouter } from "./core/router.js";
import { locations } from "./world/locations.js";
import { render } from "./ui/render.js";

const app = document.querySelector("#app");
const router = new WorldRouter(locations, state);

function paint() {
  render(app, router, state);
}

app.addEventListener("click", (event) => {
  const locationButton = event.target.closest("[data-location-id]");
  if (locationButton) {
    const id = locationButton.dataset.locationId;
    if (locations[id]) router.enter(id);
    else window.alert("该区域将在后续迁移中开放。");
    paint();
    return;
  }

  const backButton = event.target.closest(".back");
  if (backButton) {
    router.back();
    paint();
    return;
  }

  const actionButton = event.target.closest("[data-action-id]");
  if (actionButton) {
    window.alert(`验证动作：${actionButton.querySelector("strong").textContent}`);
  }
});

paint();
