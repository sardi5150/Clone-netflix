import { useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "common.white",
  boxShadow: 24,
  p: 4,
};
const LoginModal = ({ open, CloseModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Modal 
        open={open} 
        onClose={CloseModal}
    >
      <Box sx={style}>
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          Sign in
        </Typography>
        <Grid sx={{ mb: 2 }}>
          <form>
            <FormControl sx={{ mb: 2 }} fullWidth>
              <TextField
                id="email"
                name="email"
                label="Email atau Nomor Telepon"
                variant="filled"
              />
              <FormHelperText>
                please enter a valid email or phone number
              </FormHelperText>
            </FormControl>
            <FormControl sx={{ mb: 4 }} fullWidth>
              <TextField
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="filled"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
              <FormHelperText>
                Your password must contain between 4 and 60 characters
              </FormHelperText>
            </FormControl>

            <Button variant="contained" type="submit" fullWidth>
              Sign in
            </Button>
          </form>
        </Grid>

        <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Box>
            <Checkbox />
            <Typography variant="caption">Remember me</Typography>
          </Box>
          <Typography variant="caption" component="a" href="#">
            need help?
          </Typography>
        </Grid>
        <Grid container alignItems="center" sx={{ mb: 2 }}>
          <Image
            src="/__images/facebook.png" 
            alt="facebook"
            height={20}
            width={20}
            layout="fixed"
            />
           <Typography variant="caption" component="a" href="#" sx={{ ml: 1 }}>
            Log in with Facebook
          </Typography>
        </Grid>
        <Grid>
        <Typography variant="body1" component="span">
            new to Netflix?
          </Typography>
        <Typography variant="body1" color="primary" component="a" href="#"> 
            &nbsp;Sign up now.
          </Typography>
        </Grid>
        <Grid>
        <Typography variant="caption" component="span">
            This page is protected by Google reCAPTCHA to ensure you are not a bot.
          </Typography>
          <Typography variant="caption" color="primary" component="a" href="#"> 
            &nbsp;Learn more.
          </Typography>
        </Grid>

      </Box>
    </Modal>
  );
};

export default LoginModal;
