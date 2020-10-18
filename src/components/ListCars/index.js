import React, { useEffect, useState } from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'

import { useStateValue } from '../../context/state'

import InfoModal from '../InfoModal'
import FormModal from '../FormModal'

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
  OptionsContainer,
  Options,
} from './styles'

import { Btn } from '../Buttons/styled'
import {  ModalContent ,ModalDelete, ModalHeader } from '../Modal/styles'
import { Button } from '../Buttons/styled'

const ListCars = () => {
  const [{ cars }, dispatch] = useStateValue()

  const [modalInfoState, setModalInfoState] = useState(false)
  const [modalEditState, setModalEditState] = useState(false)
  const [modalDeleteState, setModalDeleteState] = useState(false)
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const [modalCar, setModalCar] = useState([])
  const [editState, setEditState] = useState(false)

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  function handleClick(e) {
    var target = e.target.className
    if (!target || target.baseVal !== 'dropdownButton') {
      setDropDownOpen(false)
    }
  }

  function openModalInfo(car) {
    setModalInfoState(true)
    setDropDownOpen(false)
    setModalCar(car)
  }

  function closeModalInfo() {
    setModalInfoState(false)
  }

  function openModalEdit(car) {
    setModalEditState(true)
    setDropDownOpen(false)
    setModalCar(car)
    setEditState(true)
  }

  function closeModalEdit() {
    setModalEditState(false)
  }

  function openModalDelete(car) {
    setModalDeleteState(true)
    setDropDownOpen(false)
    setModalCar(car)
  }

  function closeModalDelete() {
    setModalDeleteState(false)
  }


  function deleteCar(id) {
    dispatch({
      type: 'deleteCars',
      id: id,
    })
    setDropDownOpen(false)
    closeModalDelete()  
  }

  return (
    <>
      <CarList>
        {cars.map((car) => (
          <CardCar key={car.id}>
            <Images back={(props) => car.picture} alt='Carro' />
            <Description>
              <Model>{car.name}</Model>
              <Year>{car.year}</Year>
              <View onClick={() => openModalInfo(car)}>View More</View>
            </Description>

            <OptionsContainer>
              <Btn
                onClick={() => {
                  dropDownOpen === car.id
                    ? setDropDownOpen(false)
                    : setDropDownOpen(car.id)
                }}
              >
                <HiOutlineDotsVertical
                  className='dropdownButton'
                  fontSize={35}
                />
              </Btn>
              <Options
                className={dropDownOpen === car.id ? 'dropOpen' : 'dropClose'}
              >
                <li onClick={() => openModalInfo(car)}>View</li>
                <li onClick={() => openModalEdit(car)}>Edit</li>
                <li onClick={() => openModalDelete(car)}>Delete</li>
              </Options>
            </OptionsContainer>
          </CardCar>
        ))}
      </CarList>
      <InfoModal
        modalCar={modalCar}
        modalInfoState={modalInfoState}
        closeModalInfo={closeModalInfo}
      />

      <FormModal
        modalCar={modalCar}
        modalState={modalEditState}
        closeModal={closeModalEdit}
        edit={editState}
      />

      <ModalContent open={modalDeleteState} onClose={closeModalDelete}>
      <ModalDelete>
      <ModalHeader>
          <div>
            <AiFillCar />
            <h1>Delete Car</h1>
          </div>
          <Btn onClick={closeModalDelete}>
            <AiOutlineClose />
          </Btn>
          <p> Deseja deletar o <strong> {modalCar.name} </strong> ? </p>
        </ModalHeader>
        <Button className="modal" onClick={() => deleteCar(modalCar.id)} >Delete</Button>
        </ModalDelete>
      </ModalContent>
    </>
  )
}

export default ListCars
