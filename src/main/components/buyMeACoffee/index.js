// BuyMeACoffeeButton.js

import { Box, Fab, Tooltip } from "@mui/material";
import React, { useState } from "react";
import coffeIcon from "../../../assets/img/coffee.png";

const BuyMeACoffeeButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box className="fixed bottom-16 left-8" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Tooltip title="Buy Me A Coffee!" placement="right" arrow>
        <Fab
          variant="circular"
          size="large"
          color="info"
          style={{
            padding: 8,
            background: "transparent",
          }}
          onClick={() => {
            const url = "https://www.paypal.com/donate/?hosted_button_id=AYHWR5DXHT3ME";
            window.open(url, "_blank");
          }}
        >
          <img className="w-10 h-10" style={{ filter: "brightness(0) invert(1)" }} src={coffeIcon} alt="coffee" />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default BuyMeACoffeeButton;
