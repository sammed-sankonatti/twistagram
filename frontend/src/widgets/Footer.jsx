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
  borderRadius : "0px"
})


const footerOptions = [
  {
    icon : <HomeIcon />
  },
  {
    icon : <SearchIcon />
  },
  {
    icon : <OndemandVideoIcon />
  },
  {
    icon : <FavoriteBorderIcon />
  },
  {
    icon : <AccountCircleIcon />
  }
]


const Footer = () => {

  const theme = useTheme()
  const background = theme.palette.background.default;

  return (
    <Paper sx={{ position: 'fixed', bottom: -2, left: 0, margin:0, padding:0, right: 0, height:"3rem", background:background}} elevation={2}>
      <FlexBetween sx={{alignItems:"center"}}>
        {footerOptions.map((footer,i)=> (
          <StyledIconButton>
            {footer.icon}
          </StyledIconButton>
        ))}
      </FlexBetween>
    </Paper>
  )
}

export default Footer