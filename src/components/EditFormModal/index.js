import React, { useEffect, useState } from 'react'
import { FormContainer, InputContainer, Input } from './styles'
import {
  ModalActions,
  ModalContent,
  ModalHeader,
} from '../Modal/styles'

import { useStateValue } from '../../context/state'

import { Button, Btn } from '../Buttons/styled'

import { AiFillCar } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

const EditFormModal = ({ modalCar, modalEditState, closeModalEdit }) => {// eslint-disable-next-line
  const [ state , dispatch] = useStateValue() 
  const [picture, setPicture] = useState('')
  const [name, setName] = useState('')
  const [year, setYear] = useState()
  const [brand, setBrand] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState()

  useEffect(() => {
    setPicture(modalCar.picture)
    setName(modalCar.name)
    setYear(modalCar.year)
    setBrand(modalCar.brand)
    setColor(modalCar.color)
    setPrice(modalCar.price)
  }, [modalCar])

  function onHandleSubmit(e) {
    e.preventDefault()
    var alteredCar = {
      id: modalCar.id,
      picture,
      name,
      year,
      brand,
      color,
      price,
    }
    dispatch({
      type: 'updateCars',
      car: alteredCar,
    })
    closeModalEdit()
  }

  return (
    <ModalContent open={modalEditState} onClose={closeModalEdit}>
        <ModalHeader>
          <div>
            <AiFillCar />
            <h1>Edit Car</h1>
          </div>
          <Btn onClick={closeModalEdit}>
            <AiOutlineClose />
          </Btn>
        </ModalHeader>
        <FormContainer onSubmit={onHandleSubmit}>
          <InputContainer>
            <Input
              placeholder='URL Picture'
              name='picture'
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
              required
            />
            <Input
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              placeholder='Year'
              name='year'
              type='number'
              min='0'
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
            <Input
              placeholder='Brand'
              name='brand'
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
            <Input
              placeholder='Color'
              name='color'
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            />
            <Input
              placeholder='Price'
              type='number'
              min='0'
              name='Price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </InputContainer>
          <ModalActions>
            <Button type='submit' className='modal'>
              Update
            </Button>
          </ModalActions>
        </FormContainer>
    </ModalContent>
  )
}

export default EditFormModal
