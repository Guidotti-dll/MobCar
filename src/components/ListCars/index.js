import React, { useState } from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { AiFillCar } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

import {
  CardCar,
  CarList,
  Images,
  Description,
  Model,
  Year,
  View,
  Info,
  OptionsContainer,
  Options,
} from './styles'

import { Btn, Button } from '../Buttons/styled'

import {
  ModalContent,
  ModalContainer,
  ModalHeader,
  ModalImage,
  ModalDescription,
  DescriptionContainer,
  ModalActions,
} from '../../components/Modal/styles'

const ListCars = () => {
  const [modalState, setModalState] = useState(false)
  const [dropDownOpen, setDropDownOpen] = useState(false)

  function openModal() {
    setModalState(true)
    setDropDownOpen(false)
  }

  function closeModal() {
    setModalState(false)
  }

  return (
    <>
      <CarList>
        <CardCar>
          <Images
            src='https://andrigoveiculos.com.br/carros/932463821b58277c89cf87e4451d494c-bigjpg-hyundai-veloster-8400663-800-600-70.jpg'
            alt='Carro'
          />
          <Description>
            <Model>Veloster</Model>
            <Year>2012</Year>
            <View onClick={openModal}>View More</View>
          </Description>

          <OptionsContainer>
            <Btn
              onClick={() => {
                dropDownOpen ? setDropDownOpen(false) : setDropDownOpen(true)
              }}
            >
              <HiOutlineDotsVertical fontSize={35} />
            </Btn>
            <Options className={dropDownOpen ? 'dropOpen' : 'dropClose'}>
              <li onClick={openModal}>View</li>
              <li>Edit</li>
              <li>Delet</li>
            </Options>
          </OptionsContainer>
        </CardCar>
      </CarList>

      <ModalContent isOpen={modalState} onRequestClose={closeModal}>
        <ModalContainer>
          <ModalHeader>
            <div>
              <AiFillCar />
              <h1>Veloster</h1>
            </div>
            <Btn onClick={closeModal}>
              <AiOutlineClose />
            </Btn>
          </ModalHeader>
          <ModalImage src='https://andrigoveiculos.com.br/carros/932463821b58277c89cf87e4451d494c-bigjpg-hyundai-veloster-8400663-800-600-70.jpg' />
          <ModalDescription>
            <DescriptionContainer>
              <Info>Brand: Hyundai </Info>
              <Info>Age: 2012</Info>
            </DescriptionContainer>
            <DescriptionContainer>
              <Info>Price: R$150,00</Info>
              <Info>Color: Prata</Info>
            </DescriptionContainer>
          </ModalDescription>
          <ModalActions>
            <Button className='modal branco'>Cancel</Button>
            <Button className='modal'>Accept</Button>
          </ModalActions>
        </ModalContainer>
      </ModalContent>
    </>
  )
}

export default ListCars
