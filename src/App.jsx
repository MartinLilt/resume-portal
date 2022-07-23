import React, { Suspense } from 'react';
import { useState } from 'react';
import { GlobalStyle } from './styles';

const StyledBackground = React.lazy(() =>
  import('./components/sceenBackground')
);
const Header = React.lazy(() => import('./components/header'));
const Main = React.lazy(() => import('./components/mainContent'));
const Footer = React.lazy(() => import('./components/footer'));
const Modal = React.lazy(() => import('./components/modal'));

import Loader from './components/loader';
import ErrorBoundary from './components/errorBoundary';

const body = document.body;

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleModal = (type) => {
    setIsModalOpen((state) => !state);
    setModalContent(type);
    isModalOpen
      ? (body.style.overflow = 'unset')
      : (body.style.overflow = 'hidden');
  };

  return <><GlobalStyle />
  <ErrorBoundary />
  {isModalOpen && (
    <Modal toggleModal={toggleModal} modalContent={modalContent} />
  )}
  <Suspense fallback={<Loader />}>
    <StyledBackground>
      <Header toggleModal={toggleModal} />
      <Main />
      <Footer />
    </StyledBackground>
  </Suspense></>
}