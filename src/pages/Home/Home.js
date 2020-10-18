import React, { useState, useEffect, useRef } from 'react'
import {
  Wrapper,
  Footer,
  Main,
  Content,
  Controller,
  TitlesZone,
  Title,
  SubTitle,

} from './styles'


import { Button } from '../../components/Buttons/styled'

import HeaderBar from '../../components/HeaderBar'


import ListCars from '../../components/ListCars'
import FormModal from '../../components/FormModal'


import { useStateValue } from '../../context/state'

const Home = () => {// eslint-disable-next-line
  const [state, dispatch] = useStateValue()
  const [modalState, setModalState] = useState(false)

  const buttonRef = useRef()

  useEffect(() => {
    if (localStorage.cars) {
      dispatch({
        type: 'setCars',
        cars: JSON.parse(localStorage.getItem('cars') || []),
      })
    } else {
      fetchFromDB()
    }
    // eslint-disable-next-line
  }, [])

  function openModal() {
    setModalState(true)
    buttonRef.current.click()
  }

  function closeModal() {
    setModalState(false)
  }

  function testePair (){
    console.log('banana')
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
      <HeaderBar testePair={testePair} />
        <Content>
          <Controller>
            <TitlesZone>
              <Title>Cars</Title>
              <SubTitle>Choose the perfect one for you</SubTitle>
            </TitlesZone>
            <Button ref={buttonRef}  onClick={openModal}>
              Add new
            </Button>
          </Controller>
          <ListCars />
          <FormModal
            modalState={modalState}
            closeModal={closeModal}
          />
        </Content>
      </Main>
      <Footer>&copy; 2020. All rights reserved to Mobcar.</Footer>
    </Wrapper>
  )
}

export default Home
