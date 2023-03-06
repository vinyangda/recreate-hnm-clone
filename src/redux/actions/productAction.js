import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
  //미들웨어 action은 함수를 리턴한다
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/vinyangda/recreate-hnm-clone/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    // //데이터가 들어오는 것을 확인 한다 console.log(data); >> 이제 데이터를 보내준다
    // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    // 위 내용이 빠지고 아래로 간단하게 만든다
    dispatch(productActions.getAllProduct({ data }));
    //dispatch(수출한 함수 불러.사용할 함수 선택해({객체로 payload.data불러와})
  };
}

function getProductDetail(id) {
  return async (dispatch) => {
    let url = `https://my-json-server.typicode.com/legobitna/noona-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
  };
}
export const productAction = { getProducts, getProductDetail };
// 여러개의 함수를 객체형태로 담아서 수출한다
