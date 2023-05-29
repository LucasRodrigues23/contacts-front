import { AddContactData } from "../components/form/AddContactForm/AddContactFormSchema";
import { LoginData } from "../components/form/LoginForm/loginFormSchema";
import { RegisterData } from "../components/form/RegisterForm/registerFormSchema";

export interface iUserProviderProps {
    children: React.ReactNode;
}

export interface iUser {
    id: string;
    name?: string;
    email?: string;
    telefone?: string;
}

export interface iUserResponse {
    token: string;

    user: iUser;
}

export interface iContacts {
    id: string;
    name?: string;
    email?: string;
    phone?: string;
    createdAt: string
}

export interface iFormRegister {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    telefone: string;
}


export interface iUserProviderValue {
    user: iUser | null;
    setUser: (user: iUser | null) => void;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    userLogin: (data: LoginData) => Promise<void>;
    userRegister: (data: RegisterData) => Promise<boolean>;
    contextLoad: boolean
}


export interface iContactsProviderValue {
    contacts: iContacts[];
    createContact: (data: AddContactData) => Promise<boolean>;
    deleteContact: (contactId: string) => Promise<void>
    createModal: boolean;
    setCreateModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface iContactsProviderProps {
    children: React.ReactNode;
}

export interface iRequestError {
    message: string
}