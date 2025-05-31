import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Classic Models
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Customers
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
