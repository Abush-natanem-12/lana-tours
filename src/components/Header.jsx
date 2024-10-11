// import { Box, Button, SwipeableDrawer } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
const Header = function () {
  const [state, setState] = React.useState({
    right: false,
  });

  const links = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Tours", href: "#tours" },
    { text: "Community", href: "#community" },
    { text: "Testtimonials", href: "#testimonial" },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bg-[rgba(0,0,0,.9)] h-[100%] pl-2"
    >
      <List className="flex flex-col gap-10 items-center">
        {links.map((link) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <ListItem key={link.text} disablePadding>
            <ListItemButton component="a" href={link.href}>
              <ListItemText primary={link.text} className="text-gray-400" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header className="absolute top-0 left-0 w-[100%] h-20 flex items-center justify-between px-7 bg-[rgba(0,0,0,.1)]">
      <a href="#home" className="text-xl primary-color tracking-[2px]">
        Lana Tours
      </a>

      <div className="w-[70%] md:flex justify-between items-center py-7 hidden lg:w-[55%]">
        <a href="#home" className="text-xl text-gray-400 tracking-[2px]">
          Home
        </a>
        <a href="#about" className="text-xl text-gray-400 tracking-[2px]">
          About
        </a>
        <a href="#tours" className="text-xl text-gray-400 tracking-[2px]">
          Tours
        </a>
        <a href="#community" className="text-xl text-gray-400 tracking-[2px]">
          Community
        </a>
        <a href="#testimonial" className="text-xl text-gray-400 tracking-[2px]">
          Testimonials
        </a>
      </div>

      <div className="md:hidden">
        <Button onClick={toggleDrawer("right", true)}>
          {" "}
          <MenuIcon sx={{ color: "green", fontSize: "1.7rem" }} />
        </Button>
        <SwipeableDrawer
          sx={{ backgroundColor: "trasnparent" }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
          className="bg-transparent"
        >
          {list("right")}
        </SwipeableDrawer>
      </div>
    </header>
  );
};

export default Header;
