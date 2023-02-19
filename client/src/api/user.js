import axios from "axios";
import { makeHeader } from "./util";

export const getUser = async (userId, token, setUser) => {
  const headers = makeHeader(token);
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/users/${userId}`,
    headers
  );
  const data = await response.data;

  setUser(data);
};

export const getFriends = async (userId, token, dispatch, setFriends) => {
  const headers = makeHeader(token);
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/users/${userId}/friends`,
    headers
  );

  const data = response.data;

  dispatch(setFriends({ friends: data }));
};
