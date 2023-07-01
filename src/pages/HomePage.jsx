import { CssBaseline, Container, Grid, Box } from "@mui/material";
import LoginBox from "../components/LoginBox";
import "../assets/HomePage/style/Iphone14.scss";
import screenshot1 from "../assets/HomePage/images/screenshot1-2x.png";
import screenshot2 from "../assets/HomePage/images/screenshot2-2x.png";
import screenshot3 from "../assets/HomePage/images/screenshot3-2x.png";
import screenshot4 from "../assets/HomePage/images/screenshot4-2x.png";
// import gallery from "../assets/HomePage/images/screenshot0-2x.jpg";
import framed from "../assets/HomePage/images/screenshotframed.png";
import Fade from "@mui/material/Fade";
import { useState, useRef, useEffect } from "react";

export default function HomePage() {
  const count = useRef(0);
  var [screenshot, setScreenshot] = useState(screenshot1);
  const screenshots = useRef([screenshot1, screenshot2, screenshot3, screenshot4]);
  useEffect(() => {
    let screenshotTimer = setTimeout(() => {
      count.current = (count.current + 1) % 4;
      setScreenshot(screenshots.current[count.current]);
    }, 5000);
    return () => {
      clearTimeout(screenshotTimer);
    };
  }, [screenshot]);

  const FadeElement = (props) => {
    return (
      <Fade in={true} timeout={1000}>
        <img
          className="device-screen"
          src={screenshot}
          alt="insta-pictures"
        ></img>
      </Fade>
    );
  };

  return (
    <CssBaseline>
      <Container>
        <Grid
          container
          sx={{ justifyContent: "center",display:"flex"}}
          paddingY={{ xs: 5 }}
        >
          <Grid
            item
            md={4}
            sm={12}
            sx={
              {
                display: { xs: "none", lg: "flex",justifyContent:"center"},
              }
            }
          >
            <Box sx={{ position: "relative" }}>
              <img
                className="device-screen"
                src={framed}
                alt="insta-pictures"
                style={{position:"absolute", width: "265px",left: "-100px", top: "-10px"  }}

              ></img>
              <div
                className="device device-iphone-14"
              >
                <div className="device-frame">
                  <FadeElement />
                </div>
                <div className="device-stripe"></div>
                <div className="device-header"></div>
                <div className="device-sensors"></div>
                <div className="device-btns"></div>
                <div className="device-power"></div>
              </div>
            </Box>
          </Grid>

          <Grid item md={6} sx={{ justifyContent: "start",display:"flex",flexDirection:"column"}}>
            <LoginBox />
          </Grid>
        </Grid>
      </Container>
    </CssBaseline>
  );
}
