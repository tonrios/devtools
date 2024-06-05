// BuyMeACoffeeButton.js

import { Box, Fab } from "@mui/material";
import React, { useState } from "react";

const BuyMeACoffeeButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box className="fixed bottom-8 left-8" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Fab
        variant="circular"
        size="large"
        color="info"
        style={{
          width: hovered ? "auto" : "56px",
          borderRadius: hovered ? "28px" : "50%",
          padding: 8,
        }}
        onClick={() => {
          const url = "https://www.paypal.com/donate/?hosted_button_id=AYHWR5DXHT3ME";
          window.open(url, "_blank");
        }}
      >
        <img className="w-10 h-10" src="https://cdn3.iconfinder.com/data/icons/drinks-food/100/coffee-512.png" alt="coffee" />
        <span className={hovered ? "pt-1 pr-2" : ""}> {hovered ? " Buy Me A Coffee!" : ""}</span>
      </Fab>
    </Box>
  );
};

export default BuyMeACoffeeButton;
