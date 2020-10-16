import React, { useState } from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'

import { useStateValue } from '../../context/state'

import InfoModal from './infoModal'
import EditModal from '../EditFormModal'

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

const ListCars = () => {
  const [{ cars }, dispatch] = useStateValue()

  const [modalInfoState, setModalInfoState] = useState(false)
  const [modalEditState, setModalEditState] = useState(false)
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const [modalCar, setModalCar] = useState([])

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
  }

  function closeModalEdit() {
    setModalEditState(false)
  }

  function deleteCar(id) {
    dispatch({
      type: 'deleteCars',
      id: id,
    })
    setDropDownOpen(false)
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
                <HiOutlineDotsVertical fontSize={35} />
              </Btn>
              <Options
                className={dropDownOpen === car.id ? 'dropOpen' : 'dropClose'}
              >
                <li onClick={() => openModalInfo(car)}>View</li>
                <li onClick={() => openModalEdit(car)}>Edit</li>
                <li onClick={() => deleteCar(car.id)}>Delete</li>
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

      <EditModal
        modalCar={modalCar}
        modalEditState={modalEditState}
        closeModalEdit={closeModalEdit}
      />
    </>
  )
}

export default ListCars
