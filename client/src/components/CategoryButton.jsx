const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

const CategoryButton = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  backgroundColor: "#42224B",
  borderRadius: "20px",
  height: "40px",
  width: "130px",
  fontWeight: "300",
});

export default CategoryButton;
