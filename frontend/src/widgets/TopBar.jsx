import React from 'react'

import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { DarkMode, LightMode} from "@mui/icons-material";

import FlexBetween from "../components/FlexBetween"
import StyledAppBar from '../components/StyledAppBar';
import {IconButton, Typography, useTheme} from "@mui/material";
import { useDispatch } from 'react-redux';
import { setMode } from "../features/themeSlice.js"


const TopBar = () => {

    const dispatch = useDispatch();
    const theme = useTheme()
    const dark = theme.palette.neutral.dark;

  return (
    <StyledAppBar elevation={0}>
      <FlexBetween padding="0.5rem 4%">
        <FlexBetween>
          <InstagramIcon sx={{ color:"blueviolet", transform : "Scale(1.4)"}}  />
        <Typography variant='h3' color={dark} sx={{ fontFamily:"Grand Hotel", mt:"0.2rem", ml:"0.7rem"}} > Twistagram </Typography>
        </FlexBetween>
        <FlexBetween>
          <IconButton>
            <FavoriteBorderIcon sx={{ color: dark, transform : "Scale(1.4)", pr:"2px" }} />
          </IconButton>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "light" ? (
                <DarkMode sx={{ color: dark,fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ fontSize: "25px" }} />
              )}
          </IconButton>
          <IconButton>
            <LogoutOutlinedIcon sx={ { color: dark, transform : "Scale(1.1)"}} />
          </IconButton>
        </FlexBetween>
      </FlexBetween>
    </StyledAppBar>
  )
}

export default TopBar