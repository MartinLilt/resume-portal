import { useState } from 'react';

import StyledBackground from './components/sceenBackground';
import Header from './components/header';
import Main from './components/mainContent';
import Footer from './components/footer';
import Modal from './components/modal';

const body = document.body;

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleModal = (type) => {
    setIsModalOpen((state) => !state);
    setModalContent(type);
    isModalOpen
      ? (body.style.overflow = 'unset')
      : (body.style.overflow = 'hidden');
  };

  return (
    <>
      {isModalOpen && (
        <Modal toggleModal={toggleModal} modalContent={modalContent} />
      )}
      <StyledBackground>
        <Header toggleModal={toggleModal} />
        <Main />
        <Footer />
      </StyledBackground>
    </>
  );
}
