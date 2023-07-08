import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Box,
  CardContent,
  CardActionArea,
} from "@mui/material";
import {grey } from "@mui/material/colors";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import Circle from "@mui/icons-material/Circle";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
export default function PostContainer(props) {
  return (
    <Card sx={{ width: 500,borderRadius:0,border:0,boxShadow:"none" }}>
      <CardHeader
        avatar={
          <Box
            sx={{
              backgroundImage:
                "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              borderRadius: "50%",
              padding: "2px",
            }}
          >
            <Avatar sx={{ height: "35px", width: "35px", border: 2 }}>D</Avatar>
          </Box>
        }
        action={
          <IconButton>
            <MoreHoriz />
          </IconButton>
        }
        title={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
              Submit
            </Typography>
            <Circle sx={{ fontSize: 5, marginX: 1, color: grey[600] }}></Circle>
            <Typography sx={{ color: grey[600], fontSize: 14 }}>2d</Typography>
          </Box>
        }
        subheader="Caption"
        subheaderTypographyProps={{
          padding: 0,
          margin: 0,
          fontSize: 12,
          fontWeight: 400,
          color: grey[900],
        }}
      ></CardHeader>
      <CardActionArea>
        <CardMedia component="img" image="sample.jpg" />
      </CardActionArea>
      <CardActions>
        <Box sx={{ display: "flex" }}>
          <IconButton>
            <FavoriteRoundedIcon />
          </IconButton>
          <IconButton>
            <ModeCommentRoundedIcon />
          </IconButton>
          <IconButton>
            <SendRoundedIcon />
          </IconButton>
        </Box>
        <IconButton sx={{ marginLeft: "auto" }}>
          <BookmarkRoundedIcon />
        </IconButton>
      </CardActions>
      <CardContent sx={{ paddingY: 0 }}>
        <Typography sx={{ fontWeight: 600, fontSize: "14px",marginBottom:1 }}>
          251 likes
        </Typography>
        <Box sx={{display:"flex"}}>
          <Typography sx={{ fontWeight: 600, fontSize: "14px",marginRight:0.5 }}>
            ineffabledeeps
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            Message from reactor
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "14px",color:grey[600]}} underline="none">more</Typography>
        <Typography sx={{ fontSize: "14px",color:grey[600],marginTop:1}} underline="none">view all comments</Typography>
      </CardContent>
      
    </Card>
  );
}
