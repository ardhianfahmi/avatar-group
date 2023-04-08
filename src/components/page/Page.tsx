import { Helmet } from 'react-helmet-async';
import { forwardRef, ReactNode } from 'react';
// @mui
import type { BoxProps } from '@mui/material';
import { Box } from '@mui/material';
import Container from '../cointainer/Container'

// ----------------------------------------------------------------------

interface Props extends BoxProps {
    children: ReactNode;
    meta?: ReactNode;
    title: string;
}
const Page = forwardRef<HTMLDivElement, Props>(({ children, title = '', meta, ...other }, ref) => (
    <Box className="main" sx={{ minHeight: 'calc(100vh - 110px)', height: '100%', backgroundColor: '#f4f6f8', }}>
        <Helmet>
            <title>{title}</title>
            {meta}
        </Helmet>

        <Container ref={ref} {...other}>
            {children}
        </Container>
    </Box>
));

export default Page;
