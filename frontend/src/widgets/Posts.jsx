import React from 'react'
import {Box, useMediaQuery, useTheme} from "@mui/material"
import { posts } from '../assets/postsData'
import Post from './Post'
import UserAvatar from "../components/UserAvatar"

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
          mt="4rem"
        >
          {!isNonMobileScreens && (
            <Box ml="0.5rem">
              <UserAvatar /> 
            </Box> 
          )}
          {!isNonMobileScreens && <hr style={{ width:"100%",borderTop : "1px solid rgba(0, 0, 0, 0.1)", borderBottom:"1px solid rgba(255, 255, 255, 0.3)"}}/>}
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