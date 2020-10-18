import React, { useState, useEffect } from 'react'
import { FormContainer, InputContainer, Input } from './styles'
import { ModalActions } from '../Modal/styles'

import { useStateValue } from '../../context/state'


import { ModalContent, ModalHeader } from '../../components/Modal/styles'

import { AiFillCar } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

import { Button , Btn} from '../Buttons/styled'

const FormModal = ({ modalCar ,closeModal, modalState, edit }) => {// eslint-disable-next-line
  const [state, dispatch] = useStateValue()
  const [picture, setPicture] = useState('')
  const [name, setName] = useState('')
  const [year, setYear] = useState()
  const [brand, setBrand] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState()

  function onHandleSubmit(e) {
    e.preventDefault()
    if (edit === true) {
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
      closeModal()

    } else{
      var newCar = {
        picture,
        name,
        year,
        brand,
        color,
        price,
      }
      dispatch({
        type: 'addCar',
        car: newCar,
      })
      closeModal()
    }
  }


  useEffect(() => {
    if(edit === true){
    setPicture(modalCar.picture)
    setName(modalCar.name)
    setYear(modalCar.year)
    setBrand(modalCar.brand)
    setColor(modalCar.color)
    setPrice(modalCar.price)
    }else {
      setPicture('')
    setName('')
    setYear()
    setBrand('')
    setColor('')
    setPrice()
    } 
  }, [edit ,modalCar])


  return (
    <ModalContent open={modalState} onClose={closeModal}>
        <ModalHeader>
          <div>
            <AiFillCar />
            <h1>{edit ? 'Edit Car' : 'Add Car'}</h1>
          </div>
          <Btn onClick={closeModal}>
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
            {edit ? 'Update' : 'Add'}
            </Button>
          </ModalActions>
        </FormContainer>
    </ModalContent>
  )
}

export default FormModal
