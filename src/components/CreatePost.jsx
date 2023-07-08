import { useState, useRef } from "react";
// import Cropper from 'react-easy-crop';
import AvatarImageCropper from "../components/AvatarImageCropper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ImageFilter from "../components/ImageFilter";

import {
  Grid,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

export default function CreatePost() {
  const fileUploadRef = useRef(null);
  const cropperCancelRef = useRef(null);
  const cropperNextRef = useRef(null);

  const [isOpen, setOpen] = useState(true);
  const [postImage, setPostImage] = useState(null);
  const [filter, setFilter] = useState(null);
  const [cropped, setCropped] = useState(false);
  const [postImageUrl, setPostImageUrl] = useState(null);

  const reader = new FileReader();

  const handleClose = () => {
    setOpen(false);
  };

  const cropperCancel = ()=>{
    setPostImage(null);
    setFilter(null);
    setCropped(false);  
  }

  const getImage = (file)=>{
    setPostImage(file);
    setCropped(true);
    console.log(URL.createObjectURL(file))
    }
  const applyFilter = ()=>{
    
  }
  const svgIcon = (
    <svg key={50}
      aria-label="Icon to represent media such as images or videos"
      color="rgb(0, 0, 0)"
      fill="rgb(0, 0, 0)"
      height="77"
      role="img"
      viewBox="0 0 97.6 77.3"
      width="96"
    >
      <title>Icon to represent media such as images or videos</title>
      <path
        d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
        fill="currentColor"
      ></path>
      <path
        d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
        fill="currentColor"
      ></path>
      <path
        d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
        fill="currentColor"
      ></path>
    </svg>
  );

  const actions = [<Button ref={cropperCancelRef} key={0}></Button>, <Button ref={cropperNextRef} key={1}></Button>];

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      scroll="body"
      maxWidth={cropped ? "md" : "xs"}
      PaperProps={{ style: { borderRadius: 10,width:"100%",height:"auto"} }
    }
    >
      {postImage && <DialogTitle
        sx={{ padding: 1, display: "flex", justifyContent: "space-between" }}
      >
        <IconButton size="small" onClick={(a)=>{cropperCancelRef.current.click()}} > 
          <ArrowBackIcon/>
        </IconButton>
        <Typography sx={{ fontWeight: 600, alignSelf: "center" }}>
          Crop
        </Typography>
        <Button size="small" sx={{ background: "transparent" }} onClick={()=>cropperNextRef.current.click()}>Next</Button>
      </DialogTitle>}
      {!postImage && <DialogTitle
        sx={{ padding: 1, display: "flex", justifyContent: "center" }}
      >
        <Typography sx={{ fontWeight: 600, alignSelf: "center",marginY:"5px" }}>
        Create new post
        </Typography>
      </DialogTitle>}
      <DialogContent dividers={true} sx={{ padding: 0}}>
        <Grid container sx={{justifyItems:"center"}}>
        <Grid
          sx={{
            display: "flex",
            pointerEvents: cropped ? "none" :"all",
            flexDirection: "column",
            position: "relative",
            justifyContent: "center",
            height: { xs: 300, md: 450 },
            width: { xs: 300, md: 450 },
            flexShrink:0,
            filter: filter && `brightness(100%) contrast(100%) saturate(${filter.combination.saturation}%) sepia(${filter.combination.sepia}%) hue-rotate(${filter.combination.hueRotate}deg)`
          }}

          item 
          xs={12}
          md={cropped ? 6 : 12 }
        >
          <AvatarImageCropper
              filter = {filter}
              onDrop={(image)=>{setPostImage(image)}}
              apply = {getImage}
              actions={actions}
              sliderConStyle={{ display: "none" }}
              icon={svgIcon}
              text={
                <>
                  <Typography
                    sx={{ fontSize: "20px", marginBottom: 2, color: grey[900] }}
                  >
                    Upload photos and videos here!
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ background: "dark", flexGrow: false }}
                    size="small"
                    onClick={() => {
                      fileUploadRef.current.click();
                    }}
                  >
                    Select from computer
                  </Button>
                </>
              }
              cancel={cropperCancel}
            />
        </Grid>
        {cropped && <Grid item md={6} xs={12}>
          <ImageFilter setFilter={setFilter}/>
        </Grid>}
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
