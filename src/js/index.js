import store from "./store/index.js";
import { addArticle } from "../js/actions/index";
store.subscribe(() => console.log('Look ma, Redux!!'))

window.store = store;
window.addArticle = addArticle;

