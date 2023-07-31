import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        className="max-w-[428px] max-h-[370px] pr-[16px] pb-[10px] rounded-[5px]"
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            className="  max-w-[412px] max-h-[260px] pb-[15px]"
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address or Username"
              name="email"
              autoComplete="email"
              autoFocus
              className="border-[#E6E8EA] max-w-[420px] max-h-[43px] "
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <div className="max-w-[412px] max-h[78px]">
              <Button
                className=" text-[#1E2329]
                  bg-[#FCD535] text-center hover:bg-[#e9bd0e] max-w-[412px] max-h-[43px]"
                type="submit"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
                <p className="py-[10px] px-[24px] ">Log In</p>
              </Button>

              <Link
                className="tracking-[0.4px] leading-[19.42px] no-underline font-[400] font-robot max-w-[130px] max-h-[20px] text-[12px] text-[#1E2329]"
                href="#"
                variant="body2"
              >
                Forgot password?
              </Link>
            </div>
          </Box>
          <div>
            <Button
              className="font-roboto text-[14px] font-[500] text-center tracking-[0.1px] bg-[#CEE6F3] hover:bg-[#9fd1ec] leading-[23px] text-[black] max-w-[480px] max-h-[40px]"
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Login with Google
            </Button>

            <Link
              className="max-w-[182px] h-[20px] no-underline text-[#707A84]"
              href="#"
              variant="body2"
            >
              <span className="max-w-[132px] h-[20px] font-roboto text-roboto leading-[19px] tracking-[0.4px] text-center font-[400]">
                Don't have an account?
              </span>
              <span className="max-w-[43px] h-[20px] font-roboto text-roboto leading-[19.42px] tracking-[0.4px] text-center font-[400] text-[#181A20] text-[12px]">
                Sign Up
              </span>
            </Link>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
