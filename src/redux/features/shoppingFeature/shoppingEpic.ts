import { Observable ,filter, map } from "rxjs";
import { shoppingFeature } from "./shopingSlice";
import { delay } from "rxjs";

export const shoppingEpic = (actions$:Observable<any>):Observable<any> => {
    return actions$.pipe(
        filter(shoppingFeature.actions.payProduct.match),
        delay(5000),
        map(() => {
           return shoppingFeature.actions.sendProduct()
        })
    )
}