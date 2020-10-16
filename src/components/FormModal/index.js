import React, { useState } from 'react'
import { FormContainer, InputContainer, Input } from './styles'
import { ModalActions } from '../Modal/styles'

import { useStateValue } from '../../context/state'

import { Button } from '../Buttons/styled'

const FormModal = ({ closeModal }) => {
  const [{ cars }, dispatch] = useStateValue()
  const [picture, setPicture] = useState('')
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [brand, setBrand] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState()

  function onHandleSubmit(e) {
    e.preventDefault()
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

  return (
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
          Add
        </Button>
      </ModalActions>
    </FormContainer>
  )
}

export default FormModal
