import axios from "axios";
import { makeHeader } from "./util";

export const getPosts = async (token, dispatch, setPosts) => {
  const headers = makeHeader(token);
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/posts`,
    headers
  );

  const data = await response.data;
  dispatch(setPosts({ posts: data }));
};

export const getUserPosts = async (userId, token, dispatch, setPosts) => {
  const headers = makeHeader(token);
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/posts/${userId}`,
    headers
  );

  const data = await response.data;
  dispatch(setPosts({ posts: data }));
};

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

  const posts = await response.data;
  dispatch(setPosts({ posts }));
  setMethods.setImage(null);
  setMethods.setPost("");
};

export const addRemoveFriend = async (
  userId,
  friendId,
  token,
  dispatch,
  setFriends
) => {
  const headers = makeHeader(token);
  const response = await axios.patch(
    `${process.env.REACT_APP_API_URL}/users/${userId}/${friendId}`,
    {},
    headers
  );

  const data = response.data;

  dispatch(setFriends({ friends: data }));
};

export const patchLike = async (userId, postId, token, dispatch, setPost) => {
  const headers = makeHeader(token);
  const response = await axios.patch(
    `${process.env.REACT_APP_API_URL}/posts/${postId}/like`,
    { userId },
    headers
  );

  const data = await response.data;

  dispatch(setPost({ post: data }));
};
