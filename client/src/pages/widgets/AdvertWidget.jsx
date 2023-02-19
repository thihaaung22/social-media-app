import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={`${process.env.REACT_APP_API_URL}/assets/awow.jpg`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>The Way of Water</Typography>
      </FlexBetween>
      <FlexBetween>
        <Typography color={medium}>Avatar.com/KeepOurOceansAmazing</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Today, in celebration of the theatrical release of the 20th Century
        Studios film Avatar: The Way of Water on December 16, 2022, Disney and
        Avatar are launching a global “Keep Our Oceans Amazing” campaign to
        raise awareness of the challenges facing oceans and marine life.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
