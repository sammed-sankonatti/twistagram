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
  const darkest = theme.palette.neutral.darkest;

  return (
    <Card elevation={0} sx={{background:defaultdark}}>
      <CardHeader 
        avatar={
          <Avatar src={post.postersPic} />
        }
        action={
          <Box>
            <IconButton sx={{mr:"3px"}}>
              <DeleteOutlineOutlinedIcon sx={{paddingRight :"0.1rem", fill:dark}} />
            </IconButton>
            <Button variant="outlined"  size="small"  color='inherit' style={{textTransform:"none", m:"0 1px", fontSize:"0.6rem"}}>
              follow
            </Button>    
            <IconButton sx={{ml:"3px"}}>
              <MoreVertIcon sx={{color:{defaultdark}, paddingLeft : "0.3rem", transform : "scale(1.1)"}} />
            </IconButton>
          </Box>
        }
        title= {<Typography color={dark} fontWeight="400" fontSize="0.85rem"> {post.name} </Typography>}
        subheader=  {<Typography color={main} fontSize="0.6rem"> {post?.createdAt} </Typography>}
      />
      <CardMedia
        sx={{borderRadius:"1px", objectFit:"contain"}}
        component="img"
        height="100%"
        width="100%"
        image={post.image}
        alt="image-loading"
      />
      <CardActions sx={{display:"flex", p:"1px 0", m:"0", justifyContent:"space-between"}}>
        <Box>
          <IconButton aria-label="likes">
            <FavoriteBorderIcon sx={{color:{defaultdark}, fill:dark, transform : "Scale(0.95)"}} />
          </IconButton>
          <IconButton aria-label='comments'>
            <ChatBubbleOutlineIcon sx={{color:{defaultdark}, fill:dark, transform : "Scale(0.8)"}} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon sx={{ color:{defaultdark}, fill:dark, transform : "Scale(0.8)"}} />
          </IconButton>
        </Box>

        <Box>
          <IconButton aria-label="save post">
            <TurnedInNotIcon sx={{ color:{defaultdark}, fill:dark, transform : "Scale(1.1)"}}/>
          </IconButton>
        </Box>
      </CardActions>

      <CardContent sx={{paddingTop :"0.1rem", paddingLeft : "0.4rem"}}>
        <Typography>
          {post.likes.length + Math.floor(Math.random()*100)} likes
        </Typography>
        <Typography color={dark} style={{fontSize:"0.8rem"}}>
          <span style={{fontSize:"0.85rem", color:darkest, fontFamily:"Roboto"}}>{post.name}</span> {post.caption}
        </Typography>
        <Typography style={{fontSize:"0.7rem", color:"gray"}}>
          view all {post.comments.length + Math.floor(Math.random()*100)} comments
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Post