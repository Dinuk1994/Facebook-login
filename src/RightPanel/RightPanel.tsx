import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./RightPanel.css";

// function Copyright(props: any) {
//     return (
//         <div>
           
//         </div>
//     );
// }


const defaultTheme = createTheme();

export default function SignIn() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container className='main' component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address or phone number"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            className='btnLogIn'
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Log In
                        </Button>

                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    <div className='fp'>Forgotten password?</div>
                                </Link>
                            </Grid>

                        </Grid>

                        <hr className='hr' />
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Button
                                    className='btnCreateAccount'
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Create new account
                                </Button>
                            </Grid>
                        </Grid>

                    </Box>

                </Box>

                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}

            </Container>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                <Link href="#" variant="body2" sx={{ textDecoration: 'none', color: 'inherit' }} className='cp'>
                    Create a page
                </Link>
                &nbsp;for a celebrity, brand, or business.

            </Typography>
        </ThemeProvider>
    );
}