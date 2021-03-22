//actions : we need to consume the api http://localhost:8000/product/upload
import axios from "axios";


const USER_SUCCESS = "USER_SUCCESS";
const USER_FAILURE = "USER_FAILURE";
//getSingle Details Product Action
let userData = () =>
{

  return async (dispatch) => {
    try {
      console.log(response);
      let response = await axios.get("http://jsonplaceholder.typicode.com/posts");
  
      dispatch({ type: USER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: USER_FAILURE, payload: error });
    }
  };
};


export {userData,USER_SUCCESS,USER_FAILURE};