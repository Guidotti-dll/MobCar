import React from 'react'

import {
  ModalContent,
  ModalHeader,
  ModalImage,
  ModalDescription,
  InfoContainer,
  ModalActions,
  Info,
} from '../../components/Modal/styles'

import { Btn, Button } from '../Buttons/styled'

import { AiFillCar } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

const InfoModal = ({ modalCar, modalInfoState, closeModalInfo }) => (
  <ModalContent open={modalInfoState} onClose={closeModalInfo}>
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
        <InfoContainer>
        <Info>Brand: {modalCar.brand} </Info>
        <Info>Year: {modalCar.year}</Info>
        </InfoContainer>
        <InfoContainer>
        <Info>
          Price:{' '}
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(modalCar.price)}
        </Info>
        <Info>Color: {modalCar.color}</Info>
        </InfoContainer>
      </ModalDescription>
      <ModalActions>
        <Button className='modal'>Rent car</Button>
      </ModalActions>
  </ModalContent>
)

export default InfoModal
