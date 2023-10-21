import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Link from '@mui/joy/Link';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/style.css";
import { useTokenLogInContext } from "../utils/tokenContext";

export default function Login() {
    const logIn = useTokenLogInContext()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            // Realiza la llamada a la API para iniciar sesión
            let response = await axios.post('http://localhost:3000/api/v0/auth', { email, password })

            // Verifica si la respuesta es exitosa
            if (response.status === 206) {
                // Guarda el token en el contexto
                logIn(response.data);
                navigate('/FormClient');
            } else {
                // Si la respuesta no es exitosa, muestra un mensaje de error
                console.error('Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error al iniciar sesión', error);
        }
    };



    return (
        <div className="App-header">
            <main>
                <Sheet
                    sx={{
                        textAlign: 'center',
                        width: 300,
                        mx: 'auto',
                        my: 20,
                        py: 3,
                        px: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderRadius: 'sm',
                        boxShadow: 'md',
                    }}
                    variant="outlined"
                >
                    <div>
                        <Typography level="h4" component="h1">
                            <b>Invoices Services</b>
                        </Typography>
                        <Typography level="body-sm">Sign in to continue.</Typography>
                    </div>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            type="email"
                            placeholder="johndoe@email.com"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                            name="password"
                            type="password"
                            placeholder="password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </FormControl>

                    <Button
                        sx={{ mt: 1 }}
                        onClick={handleLogin}
                    >Log in</Button>
                    <Typography
                        endDecorator={<Link href="/sign-up">Sign up</Link>}
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }}
                    >
                        Don&apos;t have an account?
                    </Typography>
                </Sheet>
            </main>

        </div>
    );
}
