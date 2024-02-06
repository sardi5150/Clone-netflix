import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";


const Header = ({ OpenModal }) => {
  return (
    <Box sx={{ borderBottom: "8px solid #212121",}}>
      <AppBar
      sx={{
          backgroundColor: "transparent",
          padding: "25px 20px",
          position: "absolute",
      }}
      elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs>
                <Image
                src="/__images/netflix.svg"
                height="45px"
                width="150px"
                layout="intrinsic"
                alt="logo"
                />
            </Grid>
            <Grid item xs="auto">
                <Select 
                name="lang" 
                variant="outlined" 
                size="small"
                defaultValue="EN"
                sx={{
                    borderWidth: "2px solid #fff",
                    borderStyle: "solid",
                    borderColor: "common.white",
                    color: "common.white",
                    '& .MuiSelect-icon': {
                        color: "common.white"
                    }, // Add a comma here
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: "none"
                    }
                }}
                >
                    <MenuItem value="ID">Bahasa Indonesia</MenuItem>
                    <MenuItem value="EN">English</MenuItem>
                </Select>
            </Grid>
            <Grid item xs="auto">
                <Button variant="contained" color="primary" onClick={OpenModal}>
                    Sign In
                </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box
      sx={{
          position: "relative",
          height: "745px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          '&::after': {
            position: "absolute",
            content: "''",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.4)",
            backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.8) 100%)",
          }
      }}
      >
        <Image 
        priority
        src="/__images/backdrop.jpg" 
        layout="fill" 
        objectFit="cover"
        alt="backdrop" 
        />
        <Container maxWidth="md" sx={{position: "relative", zIndex: 2}}>
            <Typography
                variant="h2"
                component="h1"
                color="common.white"
                fontWeight="600"
                textAlign="center"
            >
                Unlimited movies, TV shows, and more.
            </Typography>
            <Typography
                variant="h5"
                component="p"
                color="common.white"
                textAlign="center"
                gutterBottom
            >
                Watch anywhere. Cancel anytime.
            </Typography>
            <Typography
                variant="h6"
                component="h1"
                color="common.white"
                textAlign="center"
                sx={{my: 3}}
            >
                Ready to watch? Enter your email to create or restart your membership.
            </Typography>
            <Grid container>
                <Grid item xs>
                    <TextField 
                    variant="filled" 
                    label="Email address" 
                    sx={{bgcolor: "common.white"}}
                    fullWidth
                    />
                </Grid>
                <Grid item xs="auto">
                    <Button 
                    variant="contained" 
                    size="large" color="primary" sx={{height: "100%", borderRadius: "2px"}}
                    >
                    Get Started
                    </Button>
                </Grid>
            </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
