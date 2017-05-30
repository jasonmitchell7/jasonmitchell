import { observable } from "mobx";

class NavStore {
    @observable activeRoute = "index";
}

var store = window.store = new NavStore;

export default store;

