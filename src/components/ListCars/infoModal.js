import React from 'react'

import {
  ModalContent,
  ModalContainer,
  ModalHeader,
  ModalImage,
  ModalDescription,
  DescriptionContainer,
  ModalActions,
} from '../../components/Modal/styles'

import { Info } from './styles'

import { Btn, Button } from '../Buttons/styled'

import { AiFillCar } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

const InfoModal = ({ modalCar, modalInfoState, closeModalInfo }) => (
  <ModalContent isOpen={modalInfoState} onRequestClose={closeModalInfo}>
    <ModalContainer>
      <ModalHeader>
        <div>
          <AiFillCar />
          <h1>{modalCar.name}</h1>
        </div>
        <Btn onClick={closeModalInfo}>
          <AiOutlineClose />
        </Btn>
      </ModalHeader>
      <ModalImage src={modalCar.picture} />
      <ModalDescription>
        <DescriptionContainer>
          <Info>Brand: {modalCar.brand} </Info>
          <Info>Age: {modalCar.year}</Info>
        </DescriptionContainer>
        <DescriptionContainer>
          <Info>Price: R$ {modalCar.price}</Info>
          <Info>Color: {modalCar.color}</Info>
        </DescriptionContainer>
      </ModalDescription>
      <ModalActions>
        <Button className='modal'>Rent</Button>
      </ModalActions>
    </ModalContainer>
  </ModalContent>
)

export default InfoModal
