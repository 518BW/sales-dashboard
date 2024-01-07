import React from "react";
import { Box } from "@mui/material";
import Dashboard from "./Dashboard";
import ResponsiveDrawer from "./ResponsiveDrawer";
import Revenue from "./Revenue";
import Transactions from "./Transactions";

function App() {
  return (
  <Box>
    <Dashboard />
    <ResponsiveDrawer />
    <Revenue />
    <Transactions />
  </Box> 
   
  );
}


export default App;