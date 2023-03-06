import { combineReducers } from "redux";
//리듀서들을 하나로 묶어 인자형태로(?) 보내준다

import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";
//필요한 리듀서들을 전부 수입해온다

export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});
//각각의 리듀서들을 갤체로 수출 해서 보내주는데 이름을 단순화 시켜서 보내 줄 수도 있다
