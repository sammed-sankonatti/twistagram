import React from 'react'
import { Box, IconButton, Paper, styled, useTheme } from "@mui/material"
import FlexBetween from "../components/FlexBetween"

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledIconButton = styled(IconButton)({
  paddingLeft : "0.8rem",
  paddingTop : "0.8rem",
  borderRadius : "0px",
  fill : "black"
})


const footerOptions = [
  {
    icon : (color) => <HomeIcon sx={{fill : color}}/>
  },
  {
    icon : (color) => <SearchIcon sx={{fill : color}} />
  },
  {
    icon : (color) => <OndemandVideoIcon sx={{fill : color}} />
  },
  {
    icon : (color) => <FavoriteBorderIcon sx={{fill : color}} />
  },
  {
    icon : (color) => <AccountCircleIcon sx={{fill : color}} />
  }
]


const Footer = () => {

  const theme = useTheme()
  const background = theme.palette.background.default;
  const darkest = theme.palette.neutral.darkest;

  return (
    <Paper sx={{ position: 'fixed', bottom: -2, left: 0, margin:0, padding:0, right: 0, height:"3rem", background:background}} elevation={2}>
      <FlexBetween sx={{alignItems:"center"}}>
        {footerOptions.map((footer,i)=> (
          <StyledIconButton key={i}>
            {footer.icon(darkest)}
          </StyledIconButton>
        ))}
      </FlexBetween>
    </Paper>
  )
}

export default Footer