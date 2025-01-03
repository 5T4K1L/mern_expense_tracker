const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

const MakeCenter = styled(Box)({
  display: "flex",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(50%, 50%)",
});

export default MakeCenter;
