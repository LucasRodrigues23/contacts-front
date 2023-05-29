import { createContext, useEffect, useState } from "react";
import { api } from "../services/Api";
import { iUserProviderValue, iUserProviderProps, iUser, iUserResponse, iFormRegister, iContacts, iRequestError } from "./types";
import { LoginData } from "../components/form/LoginForm/loginFormSchema";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../components/form/RegisterForm/registerFormSchema";
import { toast } from "react-toastify";
import { AxiosError } from "axios";


export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [contextLoad, setContextLoad] = useState(true)

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem('TOKEN')
      const userId = localStorage.getItem('USERID')


      if (!token) {
        setContextLoad(false)
        return
      }

      try {
        const { data } = await api.get(`/users/${userId}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        setUser(data)
      } catch (error) {
        navigate('/login')
      } finally {
        setContextLoad(false)
      }
    }
    authUser()
  }, [contextLoad])
  const userLogin = async (data: LoginData): Promise<void> => {

    try {
      setLoading(true);

      const response = await api.post("/login", data);

      setUser(response.data);

      window.localStorage.setItem("TOKEN", response.data.token.token);
      window.localStorage.setItem("USERID", JSON.stringify(response.data.token.user))
      toast.success("Login Realizado com sucesso!", {
        theme: "dark",
      });
      setTimeout(() => {
        navigate('/dashboard')
      }, 1000);

    } catch (error) {
      console.error(error)
      window.localStorage.clear();
      toast.error("Ops Algo deu errado", {
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (data: RegisterData): Promise<boolean> => {
    try {

      const response = await api.post<iUserResponse>("/users", data);

      toast.success("Cadastro realizado com sucesso", {
        theme: "dark",
      });
      return false
    } catch (error) {
      const currentError = error as AxiosError<iRequestError>
      toast.error(`${currentError.response?.data.message}`, {
        theme: "dark",
      });
      return true
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        userLogin,
        userRegister,
        contextLoad
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
