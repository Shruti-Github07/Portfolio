import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['About', 'Education', 'Skills', 'Projects', 'Experience', 'Contact', 'Feedback'];

function ResponsiveAppBar({ scrollToSection }) {
    // const [anchorElNav, setAnchorElNav] = React.useState(null);

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };
    return (
        <AppBar position="static" color="transparent" style={{ boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => scrollToSection(page.toLowerCase())}
                                sx={{ my: 2, color: 'Black', display: 'block', }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
