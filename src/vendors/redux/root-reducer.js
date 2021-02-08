import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartDropdownReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
	user: userReducer,
	cartDropdown: cartDropdownReducer
})

export default rootReducer