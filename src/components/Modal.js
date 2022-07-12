import { ModalBox } from '../styles';
import { modalType } from '../enums';

const Modal = ({ toggleModal, modalContent }) => {
  return (
    <ModalBox>
      {modalContent === modalType.menu ? (
        <button onClick={toggleModal}>Close menu</button>
      ) : (
        <button onClick={toggleModal}>Close contacts</button>
      )}
    </ModalBox>
  );
};

export default Modal;
