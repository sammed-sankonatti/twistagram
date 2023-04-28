import React from 'react'
import {Box, useMediaQuery, useTheme} from "@mui/material"
import { posts } from '../assets/postsData'
import Post from './Post'

const Posts = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box>
      <Box
        width="100%"
        // padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="center"
      >
        <Box
          flexBasis={isNonMobileScreens ? "38%" : undefined}
          mt={isNonMobileScreens ? undefined : "0rem"}
        >
          {
            posts.map((post, i) => (
              <Post key={i} post={post} />
            ))
          }
        </Box>
      </Box>
    </Box> 
  )
}

export default Posts