
import { USER_SUCCESS, USER_FAILURE } from "./UserAction";


  let initialState = {
    userData: [],
    errorMesssage: "",
  };
  let userReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case USER_SUCCESS:
        return {
            userData: payload
        };
      case USER_FAILURE:
        return {
          errorMesssage: payload,
        };
      
      default:
        return state;
    }
  };
  
export default userReducer;
  
