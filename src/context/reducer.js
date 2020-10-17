const generateId = require('../utils/generateId')

const initial = { cars: [] }

const mainReducer = (state, action) => {
  var tempCars
  switch (action.type) {
    case 'addCar':
      action.car.id = generateId()
      tempCars = [...state.cars, action.car]
      localStorage.setItem('cars', JSON.stringify(tempCars))
      return { ...state, cars: tempCars }

    case 'setCars':
      localStorage.setItem('cars', JSON.stringify(action.cars))
      return { ...state, cars: action.cars }

    case 'updateCars':
      tempCars = state.cars
      let carIndex = tempCars.findIndex((car) => car.id === action.car.id)
      tempCars[carIndex] = action.car
      localStorage.setItem('cars', JSON.stringify(tempCars))
      return { ...state, cars: tempCars }

    case 'deleteCars':
      tempCars = state.cars
      tempCars = tempCars.filter((car) => car.id !== action.id)
      localStorage.setItem('cars', JSON.stringify(tempCars))
      return { ...state, cars: tempCars }
    default:
      return state
  }
}

export { initial, mainReducer }
