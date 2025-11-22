import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GithubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
    >
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* LEFT SECTION — NAME */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">Aditya Singh</Typography>
          </Box>

          {/* CENTER SECTION — TABS */}
          <Box 
            sx={{ flex: 1, display: "flex", justifyContent: "center", gap: 2 }}
          >
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Projects</Button>
          </Box>

          {/* RIGHT SECTION — SOCIAL ICONS */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              color="inherit"
              href="https://linkedin.com"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>

            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>

            <IconButton color="inherit" href="https://github.com/aadityasingh1" target="_blank">
                <GithubIcon />
            </IconButton> 
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Navbar;
