import { Box, Typography, useTheme } from "@mui/material";
import { getFriends } from "api/user";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const { friends } = useSelector((state) => state.user);

  const { palette } = useTheme();

  const fetchFriends = async () => {
    await getFriends(userId, token, dispatch, setFriends);
  };

  useEffect(() => {
    fetchFriends();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  if (friends.length === 0) {
    return <></>;
  }

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends.map((fr) => {
          return (
            <Friend
              key={fr._id}
              friendId={fr._id}
              name={`${fr.firstName} ${fr.lastName}`}
              subtitle={fr.occupation}
              userPicturePath={fr.picturePath}
            />
          );
        })}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
