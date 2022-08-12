import React, { useEffect, useState } from "react";
import "./_header.scss";
import { TYDCLogo } from "../../assets/tydc-logo";
import { Nav } from "./nav";
import { LoginSignupText } from "./login-signup-text";
import { getCookies } from "../../assets/cookie-manual";
import { ViewProfile } from "./view-profile";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../assets/cookie-manual";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Hire Our Developers", "About Us", "Leave Us Feedback"];
const settings = ["Profile", "Signout"];

export const Header = (props) => {
  const [loggedIn, setLoggedIn] = useState(Boolean(getCookie("logged_in")));

  // return (
  //   <div className="header-wrapper">
  //     <TYDCLogo size={125} />
  //     <Nav />
  //     {loggedIn ? <ViewProfile /> : <LoginSignupText />}
  //   </div>
  // );
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log(anchorElUser);
  };

  const handleCloseNavMenu = (event) => {
    const text = event.target.innerText;
    if (text.includes("HIRE")) {
      navigate("/hire");
    } else if (text.includes("ABOUT")) {
      navigate("/about");
    } else if (text.includes("FEEDBACK")) {
      navigate("/feedback");
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event) => {
    if (event.target.text === "Profile") {
      if (Boolean(getCookie("logged_in"))) {
        navigate("/profile");
      } else {
        navigate("/login");
      }
    } else if (event.target.text === "Login") {
      navigate("/login");
    }
    setAnchorElUser(null);
  };
  useEffect(() => {
    setLoggedIn(Boolean(getCookie("logged_in")));
    settings[1] = loggedIn ? "Login" : "Signout";
  }, [loggedIn]);
  return (
    <AppBar
      position="static"
      style={{
        background:
          "linear-gradient( 90deg,#e7fbff 0%,#77a9b4 31.77%,#678085 73.44%,#42656c 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <TYDCLogo size={125} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

// export const Header2 = () => {
//     return <div className="header2-wrapper"></div>
// }
