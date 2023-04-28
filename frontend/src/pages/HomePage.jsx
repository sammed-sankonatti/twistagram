import React from 'react'
import {Box, useTheme} from "@mui/material";
import Posts from '../widgets/Posts';

const HomePage = () => {

    const theme = useTheme()
    const dark = theme.palette.neutral.dark;

  return (
    <Box color={dark}>
        <Posts />
    </Box>
  )
}

export default HomePage