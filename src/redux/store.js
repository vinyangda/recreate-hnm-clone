import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import productReducer from "./reducers/productReducer";
//이제 필요 없음
// import rootReducer from "./reducers";
// // import rootReducer from "./reducers/index"와 동의어 알아서 파일 찾아서 불러와 쥼
import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./reducers/productReducer";
import authenticateReducer from "./reducers/authenticateReducer";

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

//간결 해 지는 것 들
//combineReducer
//thunk
//applyMiddlewear
//composeWithDevTool
//위 네개가 전부 필요없다

//byebye createStore
// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

//더이상 createStore 더 이상 서비스 하지 않으려 함!

export default store;
