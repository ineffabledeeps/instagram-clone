import MiniDrawer from "../components/MiniDrawer";
import CreatePost from "../components/CreatePost";
import { Grid, Typography } from "@mui/material";

export default function Page404() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <MiniDrawer />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          marginLeft: {lg:"250px"},
          py: 5,px:3,
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          Sorry, this page isn't available.
        </Typography>
        <Typography variant="context" marginTop={4}>
          The link you followed may be broken, or the page may have been
          removed. Go back to Instagram.
        </Typography>
        <CreatePost />
      </Grid>
    </Grid>
  );
}
