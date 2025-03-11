import { FC, Suspense } from 'react';

import { Modal } from '@/shared/ui/deprecated/Modal';

import { Loader } from '@/shared/ui/deprecated/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    isTesting?: boolean;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { onClose, isOpen, isTesting = false } = props;
    return (
        <Modal isTesting={isTesting} onClose={onClose} isOpen={isOpen} lazy>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
