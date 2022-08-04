import * as React from "react";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";
export default function MenuAppBar() {
  const history = useHistory();

  return <Box sx={{ flexGrow: 1, width: "100vw" }}>Header</Box>;
}
