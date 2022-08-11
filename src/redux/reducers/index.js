//in index we combine the reducers of the app

import { combineReducers } from "redux";
import {productReducer, slectedProductReducer} from "./productReducer"

  const reducers = combineReducers({
    allProducts : productReducer,
    product : slectedProductReducer

})
export default reducers