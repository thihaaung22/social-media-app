import axios from "axios";
import { makeHeader } from "./util";

export const createPost = async (
  formData,
  token,
  setMethods,
  dispatch,
  setPosts
) => {
  const headers = makeHeader(token);
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/posts`,
    formData,
    headers
  );

  const posts = response.data;
  dispatch(setPosts({ posts }));
  setMethods.setImage(null);
  setMethods.setPost("");
};
