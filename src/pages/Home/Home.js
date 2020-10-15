import React, { useState } from 'react'
import {
  Wrapper,
  Footer,
  Main,
  Content,
  Controller,
  TitlesZone,
  Title,
  SubTitle,
  FormContainer,
} from './styles'

import { ModalContent, ModalHeader } from '../../components/Modal/styles'

import { Button, Btn } from '../../components/Buttons/styled'

import HeaderBar from '../../components/HeaderBar'

import ListCars from '../../components/ListCars'
import FormModal from '../../components/FormModal'

import { AiFillCar } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

const Home = () => {
  const [modalState, setModalState] = useState(false)

  function openModal() {
    setModalState(true)
  }

  function closeModal() {
    setModalState(false)
  }

  return (
    <Wrapper>
      <Main>
        <HeaderBar />
        <Content>
          <Controller>
            <TitlesZone>
              <Title>Cars</Title>
              <SubTitle>Choose the perfect one for you</SubTitle>
            </TitlesZone>
            <Button onClick={openModal}>Add new</Button>
          </Controller>
          <ListCars />

          <ModalContent isOpen={modalState} onRequestClose={closeModal}>
            <FormContainer>
              <ModalHeader>
                <div>
                  <AiFillCar />
                  <h1>New Car</h1>
                </div>
                <Btn onClick={closeModal}>
                  <AiOutlineClose />
                </Btn>
              </ModalHeader>
              <FormModal />
            </FormContainer>
          </ModalContent>
        </Content>
      </Main>
      <Footer>&copy; 2020. All rights reserved to Mobcar.</Footer>
    </Wrapper>
  )
}

export default Home
