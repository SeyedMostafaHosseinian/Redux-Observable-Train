import { configureStore } from "@reduxjs/toolkit";
import { shoppingFeature } from "./features/shoppingFeature/shopingSlice";
import { createEpicMiddleware } from "redux-observable";
import { logger } from "redux-logger";
import { _rootEpic } from "./features/shoppingFeature/rootEpic";
import { getPostsFeature } from "./features/getPostsFeature/getPostsSlice";
const  epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer :{
        shoppingState: shoppingFeature.reducer,
        getPostsState: getPostsFeature.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger,epicMiddleware)
})

epicMiddleware.run(_rootEpic)