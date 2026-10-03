export class WorldRouter {
  constructor(locations, state) {
    this.locations = locations;
    this.state = state;
  }

  get current() {
    return this.locations[this.state.route];
  }

  enter(id) {
    if (!this.locations[id]) throw new Error(`Unknown location: ${id}`);
    this.state.route = id;
  }

  back() {
    const parent = this.current?.parent;
    if (parent) this.enter(parent);
  }
}
