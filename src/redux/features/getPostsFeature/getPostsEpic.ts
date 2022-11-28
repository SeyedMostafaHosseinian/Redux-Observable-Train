import { Observable, mergeMap, tap, map, take, filter } from "rxjs";
import { ajax } from "rxjs/ajax";
import { store } from "../../store";
import { getPostsFeature } from "./getPostsSlice";

export const getPostsEpic = (actions$: Observable<any>) => {
  return actions$.pipe(
    filter(getPostsFeature.actions.sendRequest.match),
    mergeMap((actions$) => {
      return ajax.get("https://jsonplaceholder.typicode.com/posts").pipe(
        map((response: any) => {
          return store.dispatch(
            getPostsFeature.actions.requestSuccess(response.response)
          );
        })
      );
    })
  );
};
