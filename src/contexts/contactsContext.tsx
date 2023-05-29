import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/Api";
import { iContacts, iContactsProviderProps, iContactsProviderValue, iRequestError } from "./types";
import { AddContactData } from "../components/form/AddContactForm/AddContactFormSchema";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { UserContext } from "./userContext";



export const ContactContext = createContext({} as iContactsProviderValue);

export const ContactProvider = ({ children }: iContactsProviderProps) => {
    const [contacts, setContacts] = useState<iContacts[]>([])
    const { loading, setLoading } = useContext(UserContext)
    const [createModal, setCreateModal] = useState(false)

    useEffect(() => {
        const getContacts = async () => {
            const token = localStorage.getItem("TOKEN");
            const userId = localStorage.getItem("USERID")

            if (!token) {
                return null;
            }
            try {
                const { data } = await api.get(`/contacts/${userId}`, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
                setContacts(data.contacts)

            } catch (error) {
                console.error(error);
            }
        };
        getContacts();
    }, [loading]);

    const createContact = async (data: AddContactData): Promise<boolean> => {
        const token = localStorage.getItem("TOKEN")
        const userId = Number(localStorage.getItem("USERID"))
        const newContact = { userId: userId, ...data }

        try {

            const response = await api.post<iContacts>('/contacts', newContact, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            toast.success("Contato adicionado com sucesso", {
                theme: "dark",
            });
            setLoading(!loading)
            setCreateModal(false)
            return false
        } catch (error) {
            const currentError = error as AxiosError<iRequestError>
            toast.error(`${currentError.response?.data.message}`, {
                theme: "dark",
            });
            return true
        }
    }

    const deleteContact = async (contactId: string): Promise<void> => {
        const token = localStorage.getItem("TOKEN")
        try {


            await api.delete(`/contacts/${contactId}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            toast.success(`Tenologia removida`, { theme: 'dark', autoClose: 2000 })
            setLoading(!loading)
        } catch (error) {
            toast.error(`Algo deu errado tente novamente`, { theme: 'dark', autoClose: 2000 })
        }
    }


    return (
        <ContactContext.Provider
            value={{
                contacts,
                createContact,
                deleteContact,
                createModal,
                setCreateModal
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};