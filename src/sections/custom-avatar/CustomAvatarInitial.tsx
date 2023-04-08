import { Box, Card, Grid, Typography } from "@mui/material";
import CustomAvatarGroup from "../../components/custom-avatar/CustomAvatarGroup";
import { CustomAvatar } from "../../components/custom-avatar";


function CustomAvatarInitial() {

    const USERS = ['Tomi Budi', 'Budi Tomi', 'Budi Budi', 'Tomi Tomi', 'Tomi Budi'] as const;

    return (
        <Card sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            px: 2,
            py: 3,
            alignItems: 'center',
        }}
        >
            <Grid container>
                <Grid xs={12} md={4} lg={3} sx={{ alignSelf: 'center' }}>
                    <Typography variant="h6">Tiny</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <CustomAvatarGroup size={'tiny'} max={6}>
                            {USERS.map((user, index) => (
                                <CustomAvatar
                                    key={user}
                                    alt="Tomi Budi"
                                    src={''}
                                    name={user}
                                />
                            ))}
                        </CustomAvatarGroup>
                    </Box>
                </Grid>
                <Grid xs={12} md={4} lg={3} sx={{ alignSelf: 'center' }}>
                    <Typography variant="h6">Small</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <CustomAvatarGroup size={'small'} max={6}>
                            {USERS.map((user, index) => (
                                <CustomAvatar
                                    key={user}
                                    alt="Tomi Budi"
                                    src={''}
                                    name={user}
                                />
                            ))}
                        </CustomAvatarGroup>
                    </Box>
                </Grid>
                <Grid xs={12} md={4} lg={3} sx={{ alignSelf: 'center' }}>
                    <Typography variant="h6">Medium</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <CustomAvatarGroup size={'medium'} max={6}>
                            {USERS.map((user, index) => (
                                <CustomAvatar
                                    key={user}
                                    alt="Tomi Budi"
                                    src={''}
                                    name={user}
                                />
                            ))}
                        </CustomAvatarGroup>
                    </Box>
                </Grid>
                <Grid xs={12} md={4} lg={3} sx={{ alignSelf: 'center' }}>
                    <Typography variant="h6">Large</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <CustomAvatarGroup size={'large'} max={6}>
                            {USERS.map((user, index) => (
                                <CustomAvatar
                                    key={user}
                                    alt="Tomi Budi"
                                    src={''}
                                    name={user}
                                />
                            ))}
                        </CustomAvatarGroup>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}

export default CustomAvatarInitial;
