import { useContext, useState } from "react"
import { StyledContactCard, StyledEditButtons } from "./styles"
import { FaBars } from 'react-icons/fa'
import { IoClose } from "react-icons/io5"
import { Button } from "../Buttons"
import { ContactContext } from "../../contexts/contactsContext"


interface ContactCardProps {
    name: string,
    email: string,
    phone: string,
    createdAt: string,
    contactId: string
}

export const ContactCard = ({ name, email, phone, createdAt, contactId }: ContactCardProps) => {
    const [open, setOpen] = useState(false)

    return (
        <StyledContactCard>
            {open && <EditButtons contactId={contactId} />}
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{createdAt}</p>
            <button onClick={() => setOpen(!open)}>
                {!open ? <FaBars /> : <IoClose />}
            </button>

        </StyledContactCard >
    )
}

interface EditButtonsProps {
    contactId: string
}

export const EditButtons = ({ contactId }: EditButtonsProps) => {
    const { deleteContact } = useContext(ContactContext)
    const handleDelete = () => {
        deleteContact(contactId)
    }
    return (
        <StyledEditButtons>
            <Button size={"sm"} theme={"primary"} type={"button"} disabled={false}>Editar</Button>
            <Button size={"sm"} theme={"primary"} type={"button"} onclick={handleDelete} disabled={false}>Deletar</Button>
        </StyledEditButtons>
    )
}