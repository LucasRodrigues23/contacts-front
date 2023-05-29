import { useContext, useState } from "react"
import { ContactCard } from "../../components/ContactCard"
import { Header } from "../../components/header"
import { StyledDashboard } from "./styles"
import { AiOutlinePlus } from 'react-icons/ai'
import { Modal } from "../../components/Modal"
import { AddContactForm } from "../../components/form/AddContactForm"
import { ContactContext } from "../../contexts/contactsContext"

export const Dashboard = () => {
    const [modal, setModal] = useState(false)
    const { contacts, createModal, setCreateModal } = useContext(ContactContext)

    return (
        <>
            {modal && <Modal title={'Configurações'} setShowModal={setModal}>TESTANDO</Modal>}
            {createModal && <Modal title={'Adicionar Contato'} setShowModal={setCreateModal}><AddContactForm /></Modal>}
            <Header setModal={setModal}></Header>
            <StyledDashboard>
                <ul>
                    {contacts.map((contact, i) =>
                        <ContactCard key={i} name={contact.name} email={contact.email} phone={contact.phone} createdAt={contact.createdAt} contactId={contact.id} />)}
                </ul>
                <button onClick={() => setCreateModal(true)}><AiOutlinePlus /></button>
            </StyledDashboard>
        </>
    )
}
