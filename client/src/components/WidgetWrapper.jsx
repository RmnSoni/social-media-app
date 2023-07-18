import { Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({theme})=>({
    padding: "1.5rem 1.5rem 0.75rem 1.5rem",
    backgroundColor: theme.palette.backgroundColor.alt,
    borderRadius:"0.75rem"
}))