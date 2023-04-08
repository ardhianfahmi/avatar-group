import type { ReactNode, FC } from 'react';
import { Box, SxProps, Theme } from '@mui/material';

type ContainerProps = {
    children: ReactNode;
    sx?: SxProps<Theme>;
};

const Container: FC<ContainerProps> = (props) => {
    return (
        <Box
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',

                color: 'text.primary',
                flex: 1,
                ...props?.sx,
                '& > *': {
                    width: '100%',
                },
                gap: 3,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: '16px',
                }}
                className="first-children"
            >
                {props.children}
            </Box>
        </Box>
    );
};

export default Container;
