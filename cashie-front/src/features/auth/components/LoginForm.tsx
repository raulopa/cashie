import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { motion } from "framer-motion";
import { LoginRequest } from "../dtos/login-request";
import { useState } from "react";
import { AuthenticationService } from "../services/auth-service";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

    const navigate = useNavigate();

    const [loginRequest, setLoginRequest] = useState<LoginRequest>(
        {
            email: "",
            password: ""
        }
    )

    const handleLogin = () => {
        AuthenticationService.login(loginRequest);
        navigate("/");
    }

    return (
        <motion.div
            key="login"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-2/6 bg-content1 rounded-2xl shadow-xl border border-divider overflow-hidden p-8"
        >
            <div>
                <p className="text-MD text-center font-medium text-default-900 uppercase tracking-wider">ENTRA EN CASHIE</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 w-full gap-4">
                <Input
                    label="Email" type="email" className="w-full"
                    onValueChange={(value) => {
                        setLoginRequest(prev => ({
                            ...prev,
                            email: value
                        }))
                    }}
                >
                </Input>
                <Input
                    label="Contraseña" type="password" className="w-full"
                    onValueChange={(value) => {
                        setLoginRequest(prev => ({
                            ...prev,
                            password: value
                        }))
                    }}
                >
                </Input>
                <Button onPress={handleLogin} color="primary" className="w-full">
                    Login
                </Button>
            </div>
        </motion.div>
    );
}