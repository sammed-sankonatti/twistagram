import React from 'react'
import {Box, useTheme} from "@mui/material";

const HomePage = () => {

    const theme = useTheme()
    const dark = theme.palette.neutral.dark;

  return (
    <Box color={dark}>
        Homepage
    </Box>
  )
}

export default HomePage