import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";

export const Logo = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const primaryLight = theme.palette.primary.light;

  return (
    <Typography
      fontWeight="bold"
      fontSize="clamp(1rem, 2rem, 2.25rem)"
      color="primary"
      onClick={() => navigate("/home")}
      sx={{
        "&:hover": {
          color: primaryLight,
          cursor: "pointer"
        }
      }}
    >
      Sociopedia
    </Typography>
  );
};
