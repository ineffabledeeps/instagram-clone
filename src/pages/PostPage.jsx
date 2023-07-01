import { Grid } from "@mui/material";
import PostContainer from "../components/PostContainer";
import MiniDrawer from "../components/MiniDrawer";

export default function PostPage() {
  return (
    <Grid container>
      <Grid item xs={12} lg={3}><MiniDrawer /></Grid>
      <Grid item xs={12} lg={6} sx={{display:"flex",justifyContent:"center"}}>
        <PostContainer props={{ user: "deepak" }} />
      </Grid>
      <Grid item xs={12} lg={4}></Grid>
    </Grid>
  );
}
