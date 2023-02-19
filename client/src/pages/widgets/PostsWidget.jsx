import { getPosts, getUserPosts } from "api/post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const fetchPosts = async () => {
    await getPosts(token, dispatch, setPosts);
  };

  const fetchUserPosts = async () => {
    await getUserPosts(userId, token, dispatch, setPosts);
  };

  useEffect(() => {
    if (isProfile) {
      console.log(isProfile);
      fetchUserPosts();
    } else {
      console.log(isProfile);
      fetchPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          picturePath,
          location,
          userPicturePath,
          likes,
          comments
        }) => {
          return (
            <PostWidget
              key={_id}
              post={{
                postId: _id,
                postUserId: userId,
                name: firstName + " " + lastName,
                description,
                location,
                picturePath,
                userPicturePath,
                likes,
                comments
              }}
            />
          );
        }
      )}
    </>
  );
};

export default PostsWidget;
