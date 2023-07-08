import imageFilters from "../services/utilities/imageFilters";
import baloonImage from "../assets/HomePage/images/hot-air-baloon-1.webp";
import { Box, Grid, Slider, Typography } from "@mui/material";

export default function ImageFilter(props) {
  return (
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",paddingX:3,pt:3}}>
      <Grid
        container
        sx={{
          height: { md: 350 },
          justifyContent: {md:"center"},
          flexFlow: { xs: "row", md: "wrap" },
          overflow:"auto"
        }}
        rowGap={1}
        columnGap={1}
      >
        {imageFilters.map((filter) => {
          return (
            <Grid
              item
              sx={{ display: "flex", flexDirection: "column" }}
              key={filter.name}
              md={3}
            >
              {/* //   <ImageListItem key={filter.name} sx={{filter:`brightness(100%) contrast(100%) saturate(${filter.combination.saturation}%) sepia(${filter.combination.sepia}%) hue-rotate(${filter.combination.hueRotate}deg)`}}> */}
              <img
                src={baloonImage}
                srcSet={baloonImage}
                alt={filter.name}
                loading="lazy"
                onClick={(image)=>{props.setFilter(filter)
                console.log(filter)}}
                style={{
                  borderRadius: 5,
                  width: 100,
                  height: "auto",
                  filter: `brightness(100%) contrast(100%) saturate(${filter.combination.saturation}%) sepia(${filter.combination.sepia}%) hue-rotate(${filter.combination.hueRotate}deg)`,
                }}
              />
              <Typography variant="caption">{filter.name}</Typography>
            </Grid>
          );
        })}
      </Grid>
      <Slider size="small" sx={{width:"200px",mt:2}}></Slider>
    </Box>
  );
}
