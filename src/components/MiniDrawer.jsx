import {
  Drawer,
  ListItemIcon,
  ListItemText,
  List,
  ListItemButton,
  Typography,
  Box,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";
import logo from '../assets/HomePage/images/insta.png'

export default function MiniDrawer() {
  const DrawerHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginTop:20,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  return (
    <Drawer variant="permanent" sx={{display:{xs:"none",md:"flex"}}} open={true} >
      <DrawerHeader>
        <img style={{marginLeft:28,width:100}} src={logo} alt="logo"/>
      </DrawerHeader>
      <List sx={{Maxwidth:250,width:"250px"}}>
        <ListItemButton
          sx={{ margin: 1, borderRadius: 2, justifyContent: "left" }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              marginRight: 1,
            }}
          >
            <HomeRoundedIcon sx={{ fontSize: 28, color: grey[900] }} />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ fontWeight: 400 }}>Home</Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          sx={{ margin: 1, borderRadius: 2, justifyContent: "left" }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              marginRight: 1,
            }}
          >
            <SearchRoundedIcon sx={{ fontSize: 28, color: grey[900] }} />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ fontWeight: 400 }}>Search</Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          sx={{ margin: 1, borderRadius: 2, justifyContent: "left" }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              marginRight: 1,
            }}
          >
            <ExploreOutlinedIcon sx={{ fontSize: 28, color: grey[900] }} />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ fontWeight: 400 }}>Explore</Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          sx={{ margin: 1, borderRadius: 2, justifyContent: "left" }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              marginRight: 1,
            }}
          >
            <MovieCreationRoundedIcon sx={{ fontSize: 28, color: grey[900] }} />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ fontWeight: 400 }}>Reels</Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          sx={{ margin: 1, borderRadius: 2, justifyContent: "left" }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              marginRight: 1,
            }}
          >
            <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 28, color: grey[900] }} />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ fontWeight: 400 }}>Messages</Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          sx={{ margin: 1, borderRadius: 2, justifyContent: "left" }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              marginRight: 1,
            }}
          >
            <FavoriteBorderOutlinedIcon
              sx={{ fontSize: 28, color: grey[900] }}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ fontWeight: 400 }}>Notifications</Typography>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
          sx={{ margin: 1, borderRadius: 2, justifyContent: "left" }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              marginRight: 1,
            }}
          >
            <AddBoxRoundedIcon
              sx={{ fontSize: 28, color: grey[900] }}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ fontWeight: 400 }}>Create</Typography>
          </ListItemText>
        </ListItemButton>
      </List>
    </Drawer>
  );
}
