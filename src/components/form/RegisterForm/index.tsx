import { useContext } from "react"
import { UserContext } from "../../../contexts/userContext"
import { Button } from "../../Buttons"
import { Input } from "../Input"
import { InputPassword } from "../InputPassword"
import { StyledForm } from "../styles"
import { RegisterData, schema } from "./registerFormSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export const RegisterForm = () => {
    const { userRegister } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterData>({
        mode: "onBlur",
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: any) => {
        userRegister(data)
        reset()
    }
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Input label={"Nome"} id={"name"} placeholder={"Digite seu nome"} register={register('name')}></Input>
            {errors.name?.message ? <p>{errors.name.message}</p> : <p></p>}
            <Input label={"Email"} id={"email"} placeholder={"Digite seu email"} register={register('email')}></Input>
            {errors.email?.message ? <p>{errors.email.message}</p> : <p></p>}
            <InputPassword label={"Senha"} id={"password1"} placeholder={"Digite sua senha"} register={register('password')}></InputPassword>
            {errors.password?.message ? <p>{errors.password.message}</p> : <p></p>}
            <Input label={"Telefone"} id={"phone"} type="number" placeholder={"Digite seu telefone"} register={register('phone')}></Input>
            {errors.phone?.message ? <p>{errors.phone.message}</p> : <p></p>}
            <Button size={"md"} theme={"primary"} type={"submit"} disabled={false}>Criar</Button>
        </StyledForm>
    )
}