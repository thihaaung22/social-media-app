import axios from "axios";
import { setLogin } from "state";

export const register = async (values, onSubmitProps, setPageType) => {
  const formData = new FormData();

  for (let value in values) {
    formData.append(value, values[value]);
  }
  formData.append("picturePath", values.picture.name);

  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/register`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" }
    }
  );
  const savedUser = response.data;

  onSubmitProps.resetForm();

  if (savedUser) {
    setPageType("login");
  }
};

export const login = async (
  values,
  onSubmitProps,
  setLogin,
  navigate,
  dispatch
) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/login`,
    values
  );
  const loggedInUser = await response.data;
  onSubmitProps.resetForm();

  if (loggedInUser) {
    dispatch(
      setLogin({
        user: loggedInUser.user,
        token: loggedInUser.token
      })
    );
    navigate("/home");
  }
};
