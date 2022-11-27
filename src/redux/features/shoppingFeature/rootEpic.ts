import {combineEpics} from "redux-observable";
import {shoppingEpic} from "./shoppingEpic";
import {getPostsEpic} from "../getPostsFeature/getPostsEpic";

export const _rootEpic = combineEpics(
    shoppingEpic,
    getPostsEpic
)