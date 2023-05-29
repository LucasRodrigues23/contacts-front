import { LoginForm } from "../../components/form/LoginForm"
import { RegisterForm } from "../../components/form/RegisterForm"
import { Layer1, Layer2, StyledLoginPage } from "./styles"

export const LoginPage = () => {

  return (
    <StyledLoginPage>
      <Layer1>
        <div>
          <span>Registro</span>
        </div>
        <RegisterForm />
      </Layer1>
      <Layer2>
        <div>
          <span>Login</span>
        </div>
        <LoginForm />
      </Layer2>
    </StyledLoginPage>
  )
}
