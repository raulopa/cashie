import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { motion } from "framer-motion";

export default function RegisterForm() {
    return (
        <motion.div key="register"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-2/6 bg-content1 rounded-2xl shadow-xl border border-divider overflow-hidden p-8">
            <div>
                <p className="text-md text-center font-medium text-default-900 uppercase tracking-wider">REGISTRATE EN CASHIE</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 w-full gap-4">
                <Input label="Nombre" type="text" className="w-full" ></Input>
                <Input
                    label="Email" type="email" className="w-full"
                >
                </Input>
                <Input
                    label="Contraseña" type="password" className="w-full"
                >
                </Input>
                <Input
                    label="Confirma la contraseña" type="password" className="w-full"
                >
                </Input>
                <Button color="primary" className="w-full">
                    Registrame
                </Button>
            </div>
        </motion.div>
    )
}