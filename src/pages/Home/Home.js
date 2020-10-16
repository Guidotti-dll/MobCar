import React, { useState, useEffect } from 'react'
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

import { useStateValue } from '../../context/state'

const Home = () => {
  const [state, dispatch] = useStateValue()
  const [modalState, setModalState] = useState(false)

  useEffect(() => {
    if (localStorage.cars) {
      dispatch({
        type: 'setCars',
        cars: JSON.parse(localStorage.getItem('cars') || []),
      })
    } else {
      fetchFromDB()
    }
  }, [])

  function openModal() {
    setModalState(true)
  }

  function closeModal() {
    setModalState(false)
  }

  function fetchFromDB() {
    fetch('/database.json')
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: 'setCars',
          cars: response.cars,
        })
      })
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
              <FormModal closeModal={closeModal} />
            </FormContainer>
          </ModalContent>
        </Content>
      </Main>
      <Footer>&copy; 2020. All rights reserved to Mobcar.</Footer>
    </Wrapper>
  )
}

export default Home
