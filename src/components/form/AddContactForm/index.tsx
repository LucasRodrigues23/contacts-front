import { useContext } from "react"
import { Button } from "../../Buttons"
import { Input } from "../Input"
import { StyledForm2 } from "../styles"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddContactData, schema } from "./AddContactFormSchema"
import { ContactContext } from "../../../contexts/contactsContext"

export const AddContactForm = () => {
    const { createContact } = useContext(ContactContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<AddContactData>({
        mode: "onBlur",
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: any) => {
        createContact(data)
        reset()
    }
    return (
        <StyledForm2 onSubmit={handleSubmit(onSubmit)}>
            <Input label={"Nome"} id={"name"} placeholder={"Digite seu nome"} register={register('name')}></Input>
            {errors.name?.message ? <p>{errors.name.message}</p> : <p></p>}
            <Input label={"Email"} id={"email"} placeholder={"Digite seu email"} register={register('email')}></Input>
            {errors.email?.message ? <p>{errors.email.message}</p> : <p></p>}
            <Input label={"Telefone"} id={"phone"} type="number" placeholder={"Digite seu telefone"} register={register('phone')}></Input>
            {errors.phone?.message ? <p>{errors.phone.message}</p> : <p></p>}
            <Button size={"md"} theme={"primary"} type={"submit"} disabled={false}>Criar</Button>
        </StyledForm2>
    )
}