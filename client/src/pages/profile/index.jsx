import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "pages/navbar";
import FriendListWidget from "pages/widgets/FriendListWidget";
import MyPostWidget from "pages/widgets/MyPostWidget";
import PostsWidget from "pages/widgets/PostsWidget";
import UserWidget from "pages/widgets/UserWidget";
import { getUser } from "api/user";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const { _id } = useSelector((state) => state.user);
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

  const fetchUserInfo = async () => {
    await getUser(userId, token, setUser);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        p="2rem 6%"
        display={isNonMobileScreen ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreen ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <FriendListWidget userId={userId} />
        </Box>

        <Box
          flexBasis={isNonMobileScreen ? "42%" : undefined}
          mt={isNonMobileScreen ? undefined : "2rem"}
        >
          {userId === _id && <MyPostWidget picturePath={user.picturePath} />}
          <Box m="2rem 0" />
          <PostsWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
