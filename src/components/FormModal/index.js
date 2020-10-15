import React from 'react'
import { FormContainer, InputContainer, Input } from './styles'
import { ModalActions } from '../Modal/styles'

import { Button } from '../Buttons/styled'

const FormModal = () => {
  return (
    <FormContainer>
      <InputContainer>
        <Input placeholder='URL Picture' name='picture' required />
        <Input placeholder='Model' name='model' required />
        <Input placeholder='Year' name='year' required />
        <Input placeholder='Brand' name='brand' required />
        <Input placeholder='Color' name='color' required />
      </InputContainer>
      <ModalActions>
        <Button className='modal branco'>Cancel</Button>
        <Button className='modal'>Add</Button>
      </ModalActions>
    </FormContainer>
  )
}

export default FormModal
