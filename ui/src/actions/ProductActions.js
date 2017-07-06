export function getProducts() {
  return function(dispatch) {
    fetch("http://0.0.0.0:3000/products")
      .then( (response) => {
        return response.json()
      })
      .then( (json) => {
        dispatch({
          type: "GET_PRODUCTS",
          payload: json
        })
      })
  }
}
