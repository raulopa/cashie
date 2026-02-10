import LoginForm from "@/features/auth/components/LoginForm";
import RegisterForm from "@/features/auth/components/RegisterForm";
import { Button } from "@heroui/button";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function LoginPage() {

    const [isLogin, setLogin] = useState<boolean>(true);


    const handleRegisterLogin = () => {
        setLogin(!isLogin);
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-inherit text-foreground">
            <AnimatePresence mode="wait">
                <AnimatePresence>
                    {isLogin ? (
                        <LoginForm key="login" />
                    ) : (
                        <RegisterForm key="register" />
                    )}
                </AnimatePresence>

                <div className="p-2">
                    <Button
                        onPress={handleRegisterLogin}
                        color="primary"
                        variant="light"
                    >
                        {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
                    </Button>
                </div>
            </AnimatePresence>
        </div>
    )
}