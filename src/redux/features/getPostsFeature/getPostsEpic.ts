import {Observable, mergeMap, tap, map, take, filter} from "rxjs";
import {ajax} from "rxjs/ajax"
import {store} from "../../store";
import {getPostsFeature} from "./getPostsSlice";

export const getPostsEpic = (actions$:Observable<any>):Observable<any> => actions$.pipe(
    filter(getPostsFeature.actions.sendRequest.match),
    map(actions$ => {
        return getPostsFeature.actions.requestSuccess("Salam")
    })

)