import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import ProductDetail from "./pages/ProductDetail";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  // const [authenticate, setAuthenticate] = useState(false); // true면 로그링니 됨
  // useEffect(() => {
  //   console.log("??", authenticate);
  // }, [authenticate]);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

//**REDUX정리 */
// 리덕스는 동기적으로 스테이트를 처리를 한다
// API호출할 때 비동기적으로 작동이 필요하기 때문에 redux의 미들웨어인 Thunk를 사용해준다
//
//미들웨어는  store에서 rootReducer를 보낼 때, applyMiddlewear를 두번째 인자로 보내준다
//
//reducer 는 combineReducer로 묶어 줄 수 있다.
//combineReducer로 묶인 reducer들은 객체형태로 반환되어 사용된다. (이름을 지어주면 편리함!)
//
//useSelector() 함수를 사용하여 받아 올 때 useSelector(state.reducer객체.정보) 순으로 가져오면 된다
//
//>>>>redux tool kit
