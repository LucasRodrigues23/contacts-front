import { useContext } from "react";
import { Button } from "../Buttons";
import { StyledHeader } from "./styles"
import { BsGearFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

interface iHeaderProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}
export const Header = ({ setModal }: iHeaderProps) => {
    const navigate = useNavigate();

    const userLogout = () => {
        window.localStorage.clear();
        navigate("/login");
    }

    return (
        <StyledHeader>
            <div>
                <div>
                    <h2>
                        ContatinhosDaNet
                    </h2>
                </div>
                <div>
                    <Button size={"md"} theme={"primary"} type={"button"} onclick={() => setModal(true)} disabled={false}><BsGearFill /></Button>
                    <Button size={"md"} theme={"primary"} type={"button"} onclick={userLogout} disabled={false}><FiLogOut /></Button>
                </div>
            </div>

        </StyledHeader>
    )
}
