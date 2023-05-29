import { useOutClick } from '../../hooks/useOutClick'
import { ModalBox, ModalTitle, ModalWrapper } from './styles'

interface iModalProps {
    title: string
    children: React.ReactNode
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({ title, children, setShowModal }: iModalProps) => {
    const modalRef = useOutClick(() => setShowModal(false))

    return (
        <ModalWrapper>
            <ModalBox ref={modalRef}>
                <ModalTitle>
                    <h2>{title}</h2>
                    <button onClick={() => setShowModal(false)}>X</button>
                </ModalTitle>
                {children}
            </ModalBox>
        </ModalWrapper>
    )
}

