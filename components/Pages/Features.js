import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { blue, grey } from "@mui/material/colors";
import BorderBottomBox from "../Wrapper/BorderBottomBox";

const Title = ({ text }) => (
  <Typography
    variant="h3"
    component="h2"
    gutterBottom
    sx={{ textAlign: { xs: "center", md: "left" } }}
  >
    {text}
  </Typography>
);
const Description = ({ text }) => (
  <Typography
    variant="h5"
    component="h3"
    sx={{ textAlign: { xs: "center", md: "left" } }}
  >
    {text}
  </Typography>
);

const Features = () => {
  return (
    <Box sx={{ backgroundColor: "common.black", color: "common.white" }}>
      <BorderBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid item xs={12} md={6}>
              <Title text="Enjoy on your TV." />
              <Description text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Image
                    src="/__images/tv.png"
                    width="640px"
                    height="480px"
                    alt="tv"
                    layout="responsive"
                  />
                </Box>
                <Box sx={{ 
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    maxWidth:"73%",
                    maxHeight: "54%",
                    top: "48%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}>
                  <video
                    src="__videos/tv.m4v"
                    style={{height: "100%", width: "100%"}}
                    autoPlay
                    playsInline
                    muted
                    loop
                  >
                  </video>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderBottomBox>
      <BorderBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
            <Box sx={{ position: "relative" }}>
            <Box>
                <Image
                  src="/__images/mobile.jpg"
                  width="640px"
                  height="480px"
                  alt="mobile"
                  layout="responsive"
                />
              </Box>
                <Box
                 sx={{
                     position: "absolute",
                     bgcolor: "common.black",
                     zIndex: 1,
                     border : "2px solid #9e9e9e",
                     borderRadius: "10px",
                     p: 1,
                     width: {
                        xs:"80%",
                        sm: "70%",
                        md: "60%",
                     },
                     bottom:{
                        xs: "5%",
                        md: "10%",
                     },
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={2} md={3}>
                    <Image
                        src="/__images/boxshot.png"
                        width="55px"
                        height="80px"
                        alt="boxshot"
                        layout="intrinsic"
                    />
                    </Grid>
                    <Grid item xs={8} md={6}>
                        <Typography>Stranger Things</Typography>
                        <Typography variant="body1" color={blue.A400}>
                            Downloading...
                        </Typography>
                    </Grid>
                    <Grid item xs={2} md={3}>
                    <Image
                        src="/__images/download.gif"
                        width="50px"
                        height="50px"
                        alt="download"
                        layout="intrinsic"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Title text="Download your shows to watch offline." />
              <Description text="Save your favourites easily and always have something to watch." />
            </Grid>
          </Grid>
        </Container>
      </BorderBottomBox>

      <BorderBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid item xs={12} md={6}>
              <Title text="Watch everywhere." />
              <Description text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." />
            </Grid>
            <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Image
                   src="/__images/devices.png"
                   width="640px"
                   height="480px"
                   alt="devices"
                   layout="responsive"
                  />
                </Box>
                <Box sx={{ 
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    maxWidth:"65%",
                    maxHeight: "49%",
                    top: "33%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}>
                  <video
                    src="__videos/devices.m4v"
                    style={{height: "100%", width: "100%"}}
                    autoPlay
                    playsInline
                    muted
                    loop
                  >
                  </video>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderBottomBox>

      <BorderBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Box>
                <Image
                  src="/__images/kids.png"
                  width="640px"
                  height="480px"
                  alt="kids"
                  layout="responsive"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Title text="Create profiles for kids." />
              <Description text="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." />
            </Grid>
          </Grid>
        </Container>
      </BorderBottomBox>
    </Box>
  );
};

export default Features;
