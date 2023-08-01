import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";
import Up from "./svgg/up";
import Down from "./svgg/down";

import { Manage } from "./context/context";
import { useContext } from "react";

export default function ResponsiveAppBshar() {
  const { lang, setlang } = useContext(Manage);
  const settings = lang ? ["English", "Farsi"] : ["انگلیسی", "فارسی"];
  const pages = lang
    ? ["Blog", "Aboutus", "Pricing", "Products"]
    : ["بلاگ", "درباره ما", "قیمت ها", "محصولات"];

  const [direction, setdirection] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    event.preventDefault();
    setdirection(!direction);
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    e.preventDefault();
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (e) => {
    e.preventDefault();

    setlang(!lang);

    setdirection(!direction);

    setAnchorElUser(null);
  };
  const handleCloseUserMenu1 = (e) => {
    e.preventDefault();

    setlang(true);

    setdirection(!direction);

    setAnchorElUser(null);
  };
  const handleCloseUserMenu2 = (e) => {
    e.preventDefault();

    setlang(false);

    setdirection(!direction);

    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="bg-[#FFFFFF]">
      <Container maxWidth="xl ">
        <Toolbar disableGutters className="max-w-[1860px] max-h-[37px] ">
          <div className="w-[1438px] max-h-[37px]">
            <div className="w-[166px] max-h-[37px]">
              <div className="max-w-[138px] h-[37px] flex justify-start items-center ">
                <Typography
                  className="max-w[125px] leading-[20px] tracking-[-0.5px] h-[30px] text-[18px] text-[#393F49]"
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "clinton",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Logo place
                </Typography>
              </div>
            </div>
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              className=" flex items-center gap-[10px]"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  className=" rounded-3px h-[32px]"
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Button className="text-[black]" textAlign="center">
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            className="mr-[15px]"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                className="font-iran "
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {lang ? (
              <span className="text-black font-iran">En</span>
            ) : (
              <span className="text-black font-iran">زبان</span>
            )}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {direction ? <Down></Down> : <Up></Up>}
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={settings[0]} onClick={handleCloseUserMenu1}>
                <Typography className="font-iran" textAlign="center">
                  {settings[0]}
                </Typography>
              </MenuItem>

              <MenuItem key={settings[1]} onClick={handleCloseUserMenu2}>
                <Typography className="font-iran" textAlign="center">
                  {settings[1]}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
