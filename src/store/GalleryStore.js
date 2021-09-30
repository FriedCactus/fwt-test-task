import { makeAutoObservable } from "mobx";

class GalleryStore {
  theme = "light";

  setTheme(value) {
    this.theme = value;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default GalleryStore;
