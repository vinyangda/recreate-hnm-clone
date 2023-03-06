import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import productReducer from "./reducers/productReducer";
//이제 필요 없음
import rootReducer from "./reducers";
// import rootReducer from "./reducers/index"와 동의어 알아서 파일 찾아서 불러와 쥼

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
