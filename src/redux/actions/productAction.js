function getProducts(searchQuery) {
  //미들웨어 action은 함수를 리턴한다
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/vinyangda/recreate-hnm-clone/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    //데이터가 들어오는 것을 확인 한다 console.log(data); >> 이제 데이터를 보내준다
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}
export const productAction = { getProducts };

// 여러개의 함수를 객체형태로 담아서 수출한다
