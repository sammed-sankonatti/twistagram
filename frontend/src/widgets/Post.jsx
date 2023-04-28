import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, IconButton, TextField, Typography, useTheme } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';


const Post = ({post}) => {

  const theme = useTheme()
  const defaultdark = theme.palette.background.default;
  const dark = theme.palette.neutral.dark
  const main = theme.palette.neutral.main

  return (
    <Card elevation={0} sx={{background:defaultdark}}>
      <CardHeader 
        avatar={
          <Avatar src={post.postersPic} />
        }
        action={
          <>
            <IconButton >
              <DeleteOutlineOutlinedIcon sx={{paddingRight :"0.1rem", color:{dark}}} />
            </IconButton>
            <Button variant="outlined"  size="small"  color='inherit' style={{textTransform:"none", fontSize:"0.6rem"}}>
              follow
            </Button>
            
          <IconButton>
            <MoreVertIcon sx={{color:{defaultdark}, paddingLeft : "0.3rem", transform : "scale(1.1)"}} />
          </IconButton>
          </>
        }
        title= {<Typography color={dark} fontWeight="400" fontSize="0.85rem"> {post.name} </Typography>}
        subheader=  {<Typography color={main} fontSize="0.8rem"> {post?.createdAt} </Typography>}
      />
      <CardMedia
        sx={{borderRadius:"1px", objectFit:"contain"}}
        component="img"
        height="100%"
        width="100%"
        image={post.image}
        alt="image-loading"
      />
      <CardActions sx={{display:"flex", p:"0", m:"0", justifyContent:"space-between"}}>
        <Box>
          <IconButton aria-label="likes">
            <FavoriteBorderIcon sx={{color:{defaultdark}, transform : "Scale(0.95)"}} />
          </IconButton>
          <IconButton aria-label='comments'>
            <ChatBubbleOutlineIcon sx={{color:{defaultdark}, transform : "Scale(0.8)"}} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon sx={{ color:{defaultdark}, transform : "Scale(0.8)"}} />
          </IconButton>
        </Box>

        <Box>
          <IconButton aria-label="save post">
            <TurnedInNotIcon sx={{ color:{defaultdark}, transform : "Scale(1.1)"}}/>
          </IconButton>
        </Box>
      </CardActions>

      <CardContent sx={{paddingTop :"0.1rem", paddingLeft : "0.4rem"}}>
        <Typography>
          {post.likes.length} likes
        </Typography>
        <Typography color={dark} style={{fontSize:"0.8rem"}}>
          <b style={{fontSize : "0.8rem"}}> {post.name} </b> {post.caption}
        </Typography>
        <Typography style={{fontSize:"0.7rem", color:"gray"}}>
          view all {post.comments.length} comments
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Post