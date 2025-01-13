import { FC } from 'react';

import { Modal } from 'shared/ui/Modal/Modal';

import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { onClose, isOpen } = props;
    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
