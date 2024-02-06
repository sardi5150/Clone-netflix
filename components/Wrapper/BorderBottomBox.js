import Box from "@mui/material/Box";
import { styled } from "@mui/material";

const BorderBottomBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.common.black,
    borderBottom: "8px solid #212121"
}))

export default BorderBottomBox;