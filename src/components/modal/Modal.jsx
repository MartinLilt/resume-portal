import React from 'react';
import {
  ModalBox,
  ModalContainer,
  ModalTitle,
  ModalList,
  ModalSentence,
  ModalLink,
} from './modal.styled';
import { modalType, modalLinks } from '../../enums';

import CloseIcon from '../../icons/arrow.svg';

const Modal = ({ toggleModal, modalContent }) => {
  const isTypeOf = modalContent === modalType.menu;
  const options = isTypeOf ? modalLinks.info : modalLinks.contacts;
  return (
    <ModalBox>
      <ModalContainer>
        <ModalTitle>
          <h3>{isTypeOf ? 'More info' : 'Contacts'}</h3>
          <button
            title={`Click to close ${isTypeOf ? 'menu' : 'contacts'}.`}
            onClick={() => toggleModal(null)}
          >
            <CloseIcon />
          </button>
          <button
            title={`Click to close ${isTypeOf ? 'menu' : 'contacts'}.`}
            onClick={() => toggleModal(null)}
          >
            <CloseIcon />
          </button>
        </ModalTitle>
        <ModalList>
          {options.map((contact, id) => {
            return (
              <ModalSentence key={id}>
                <ModalLink
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Click to contact me on ${contact.title}.`}
                >
                  {contact.title}
                </ModalLink>
              </ModalSentence>
            );
          })}
        </ModalList>
      </ModalContainer>
    </ModalBox>
  );
};

export default Modal;
