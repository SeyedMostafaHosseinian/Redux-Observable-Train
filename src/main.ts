import { getPostsFeature } from "./redux/features/getPostsFeature/getPostsSlice";
import { shoppingFeature } from "./redux/features/shoppingFeature/shopingSlice";
import { store } from "./redux/store";

//styles
import "./styles/style.scss";

//elements
let payButton = document.getElementById("buy") as HTMLElement;
let orderResults = document.getElementById("orders_display") as HTMLElement;


payButton.addEventListener("click", () => {
    store.dispatch(getPostsFeature.actions.sendRequest())
});
