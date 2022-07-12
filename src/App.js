import { useState } from 'react';
import { StyledBg } from './styles';

import Container from './components/Container';
import Header from './components/Header';
import Main from './components/Main';
import Content from './components/Content';
import FooterBg from './components/Footer';
import Modal from './components/Modal';

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
      <StyledBg>
        <Container>
          <Header toggleModal={toggleModal} />
          <main>
            <Main />
            <Content />
          </main>
        </Container>
        <FooterBg />
      </StyledBg>
    </>
  );
}

// @media screen and (min-width: 768px) {
//     max-width: 768px;
//     background-image: url(${imageTablet});
//   }
//   @media screen and (min-width: 1280px) {
//     background-image: url(${imageDesktop});
//   }
