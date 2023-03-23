import BottomNavigation from "@mui/material/BottomNavigation";
import { Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function LabelBottomNavigation() {
  return (
    <BottomNavigation
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-end",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        maxWidth: 380,
        height: 200,
        borderRadius: 1,
      }}
    >
      <Typography>
        {/* contact info */}
        <LocalPhoneIcon />
        <b> Contact Us</b> 0504024252 | orginy1526@gmail.com
        <br />
        {/* all rights reserved */}
        All rights reserve to Or Giny 2023 &copy;
      </Typography>
    </BottomNavigation>
  );
}
