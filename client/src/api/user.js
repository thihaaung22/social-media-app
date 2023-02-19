import axios from "axios";
import { makeHeader } from "./util";

export const getUser = async (userId, token, setUser) => {
  const headers = await makeHeader(token);
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/users/${userId}`,
    headers
  );
  const data = await response.data;

  setUser(data);
};
