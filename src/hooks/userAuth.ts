import { useContext } from "react"
import { UserContext } from "../contexts/userContext"


export const useAuth = () => {
  const authContext = useContext(UserContext)

  return authContext
}