import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

// Same as root-reducer, we need to group all sagas and fire them at the same time
export default function* rootSaga() {
	/* all effect simply allows us to run multiple sagas at the same time since
    if we don't use it, we have to have multiple yields which won't allow us
    to run those sagas concurrently (yield == await) */
	/* call effect is essentially a function call. Syntax below is equivalent to
    fetchCollectionsStart() => Still works, this is just the saga way of doing things */
	yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)]);
}
