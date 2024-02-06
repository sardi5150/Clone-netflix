import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "common.black", color: "grey.700" }}>
      <Container maxWidth="lg" sx={{ py: 6 }} >
        <Stack spacing={4}> 

       
        <Typography sx={{mb: 4}}>
            Questions ? Call 000-800-040-1843
        </Typography>
        <Box>
          <Grid container spacing={4} sx={{mb: 4}}>
          <Grid item xs={6} md={3}>
            <Stack spacing={2}>
                <Typography variant="body1" component="a">
                  FAQ
                </Typography>
                <Typography variant="body1" component="a">
                  Investor Relations
                </Typography>
                <Typography variant="body1" component="a">
                  Ways to Watch
                </Typography>
                <Typography variant="body1" component="a">
                  Corporate Information
                </Typography>
                <Typography variant="body1" component="a">
                  Only on Netflix
                </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
          <Stack spacing={2}>
                <Typography variant="body1" component="a">
                  Help Center
                </Typography>
                <Typography variant="body1" component="a">
                  Jobs
                </Typography>
                <Typography variant="body1" component="a">
                  Terms of Use
                </Typography>
                <Typography variant="body1" component="a">
                  Contact Us
                </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
          <Stack spacing={2}>
                <Typography variant="body1" component="a">
                  Account
                </Typography>
                <Typography variant="body1" component="a">
                  Reedem Gift Cards
                </Typography>
                <Typography variant="body1" component="a">
                  Privacy
                </Typography>
                <Typography variant="body1" component="a">
                  Speed Test
                </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
          <Stack spacing={2}>
                <Typography variant="body1" component="a">
                  Media Center
                </Typography>
                <Typography variant="body1" component="a">
                  Buy Gift Cards
                </Typography>
                <Typography variant="body1" component="a">
                  Cookies preferences
                </Typography>
                <Typography variant="body1" component="a">
                  Legal Notices
                </Typography>
            </Stack>
          </Grid>
        </Grid>
        </Box>
        
        <Box>
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
              
        </Box> 
         <Typography variant="caption" >
                Netflix Indonesia
          </Typography> 
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
