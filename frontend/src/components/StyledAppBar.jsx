import { AppBar } from "@mui/material";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)(({theme})=> ({
  position : "fixed",
  background : theme.palette.background.default
}))

export default StyledAppBar;