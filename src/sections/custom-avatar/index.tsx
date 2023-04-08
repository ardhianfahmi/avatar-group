import { Box, Typography } from "@mui/material";
import CustomAvatarImage from "./CustomAvatarImage";
import CustomAvatarInitial from "./CustomAvatarInitial";
import CustomAvatarMore from "./CustomAvatarMore";
import CustomAvatarSize from "./CustomAvatarSize";


function CustomAvatarSection() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            px: 2,
            py: 3,
            gap: 3,
            textAlign: 'center'
        }}>
            <Typography variant="h2">Custom Avatar</Typography>
            <CustomAvatarImage />
            <CustomAvatarInitial />
            <CustomAvatarMore />
            <CustomAvatarSize />
        </Box>
    );
}

export default CustomAvatarSection;
