import * as React from "react";
import { Letter } from "./svgg/letter";
import Image from "next/image";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import google from "./image/google.png";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Manage } from "./context/context";
import { useContext } from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const { dark, lang, setlang } = useContext(Manage);
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
        className={`${
          dark
            ? " max-w-[428px] max-h-[370px] pr-[16px] pb-[10px] rounded-[5px]"
            : " max-w-[428px] max-h-[370px] pr-[16px] pb-[10px] rounded-[5px] bg-[#2B3139]"
        }`}
        component="main"
      >
        <CssBaseline />
        <Box>
          <Box
            className=" max-w-[412px] max-h-[260px] pb-[15px]"
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, borderColor: "red" }}
          >
            <TextField
              className={" h-[80px] border-[3px] max-w-[420px] max-h-[43px] "}
              margin="normal"
              color="primary"
              required
              fullWidth
              id="email"
              label={
                lang ? (
                  <span
                    className={`${
                      dark ? "text-[#BAC0C6]  " : "text-[#848E9C]  "
                    }`}
                  >
                    Email Address or Username
                  </span>
                ) : (
                  <span
                    className={`${
                      dark
                        ? "text-[#BAC0C6] font-iran text-right  "
                        : "text-[#848E9C] font-iran text-right "
                    }`}
                  >
                    لطفا ایمیل خود را وارد کنید
                  </span>
                )
              }
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={
                lang ? (
                  <span
                    className={`${dark ? "text-[#BAC0C6]" : "text-[#848E9C]"}`}
                  >
                    Password
                  </span>
                ) : (
                  <p
                    className={`${
                      dark
                        ? "text-[#BAC0C6] font-iran text-right"
                        : "text-[#848E9C] font-iran text-right"
                    }`}
                  >
                    پسورد را وارد کنید
                  </p>
                )
              }
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <div className="max-w-[412px] max-h[78px]">
              <Button
                className=" text-[#1E2329]
                  bg-[#FCD535] py-[10px] px-[24px]  text-center hover:bg-[#e9bd0e] max-w-[412px] max-h-[43px]"
                type="submit"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
                {lang ? (
                  <p className="capitalize font-roboto font-[700] ">Log In</p>
                ) : (
                  <p className=" font-[700] font-iran">ورود</p>
                )}
              </Button>

              <Link
                className=" tracking-[0.4px] leading-[19.42px] no-underline font-[400] font-roboto  max-h-[20px] text-[12px] text-[#1E2329]"
                href="#"
                variant="body2"
              >
                {lang ? (
                  <span
                    className={`${dark ? "text-[black]" : "text-[#B7BDC6]"}`}
                  >
                    Forgot password?
                  </span>
                ) : (
                  <span
                    className={`${
                      dark
                        ? "block text-[black] font-iran text-right"
                        : "block font-iran text-[#EAECEF] text-right"
                    }`}
                  >
                    ? پسورد را فراموش کردید
                  </span>
                )}
              </Link>
            </div>
          </Box>
          <div>
            <Button
              className={`${
                dark
                  ? "font-roboto text-[14px] font-[500] text-center tracking-[0.1px] bg-[#E6E8EA] hover:bg-[#E6E8EA] leading-[23px] text-[black] max-w-[480px] max-h-[40px]"
                  : "font-roboto text-[14px] font-[500] text-center tracking-[0.1px] bg-[#1E2329]  leading-[23px] text-[#96999C] max-w-[480px] max-h-[40px]"
              } `}
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              <Image
                className="brightness-[1.7] w-[25px] h-[25px]rounded-[5px] mr-[10px]"
                src={google}
              ></Image>
              <p>
                {lang ? (
                  <span
                    className={`${
                      dark
                        ? "text-[black] capitalize"
                        : "text-[#F5F5F5] capitalize"
                    }`}
                  >
                    Log in with Google
                  </span>
                ) : (
                  <span
                    className={`${
                      dark
                        ? "text-[black]  font-iran"
                        : "text-[#F5F5F5]  font-iran"
                    }`}
                  >
                    ورود با گوگل
                  </span>
                )}
              </p>
            </Button>

            <Link
              className=" max-w-[182px] h-[30px] no-underline text-[#707A84]"
              href="#"
              variant="body2"
            >
              {lang ? (
                <span
                  className={`${
                    dark
                      ? "max-w-[132px] h-[20px] font-roboto text-roboto leading-[19px] tracking-[0.4px] text-center font-[400]"
                      : " max-w-[132px] h-[20px] font-roboto text-roboto leading-[19px] tracking-[0.4px] text-center font-[400] text-[#B7BDC6]"
                  }`}
                >
                  Don't have an account?
                </span>
              ) : (
                <span
                  className={`${
                    dark
                      ? "  font-iran text-right"
                      : "  right-0  font-iran text-right text-[#B7BDC6]"
                  }`}
                >
                  حساب از قبل ندارید؟
                </span>
              )}

              <span
                className={`${
                  dark
                    ? " ml-[3px] max-w-[43px] h-[20px] font-roboto text-roboto leading-[19.42px] tracking-[0.4px] text-center font-[400] text-[#181A20] text-[14px]"
                    : " ml-[3px] max-w-[43px] h-[20px] font-roboto text-roboto leading-[19.42px] tracking-[0.4px] text-center font-[400] text-[#F0B90B] text-[14px]"
                }`}
              >
                {lang ? (
                  <span>Sign Up</span>
                ) : (
                  <span className=" text-right  font-iran ">ثبت نام</span>
                )}
              </span>
            </Link>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
