import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../Buttons"
import { Input } from "../Input"
import { InputPassword } from "../InputPassword"
import { StyledForm } from "../styles"
import { LoginData, schema } from "./loginFormSchema"
import { useAuth } from "../../../hooks/userAuth"

export const LoginForm = () => {
    const { userLogin } = useAuth()
    const { register, handleSubmit, formState: { errors }, } = useForm<LoginData>({
        mode: "onBlur",
        resolver: zodResolver(schema)
    })

    return (
        <StyledForm onSubmit={handleSubmit(userLogin)}>
            <Input label={"Email"} id={"loginEmail"} placeholder={"Digite seu email"} register={register('email')}></Input>
            {errors.email?.message ? <p>{errors.email.message}</p> : <p></p>}
            <InputPassword label={"Senha"} id={"password"} placeholder={"Digite sua senha"} register={register('password')}></InputPassword>
            {errors.password?.message ? <p>{errors.password.message}</p> : <p></p>}
            <Button size={"md"} theme={"primary"} type={"submit"} disabled={false}>Entrar</Button>
        </StyledForm>
    )
}