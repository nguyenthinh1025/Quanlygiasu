import { http } from "../../utis/reponse";

export const RegisterAction = (value, history) => {
  return async (dispatch) => {
    try {
      let result = await http.post("/auth/register", value);
      console.log(result.data);
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
};
export const LoginAction = (value) => {
    return async (dispatch) => {
      try {
        let result = await http.post("/auth/login", value);
        console.log(result.data);

      } catch (error) {
        console.log(error);
      }
    };
  };