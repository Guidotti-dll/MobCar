const generateId = require('../utils/generateId')

const initial = { cars: [] }

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'addCar':
      // action.car.id = state.cars[state.cars.length - 1] + 1
      action.car.id = generateId()
      var cars = [...state.cars, action.car]
      localStorage.setItem('cars', JSON.stringify(cars))
      return { ...state, cars }

    case 'setCars':
      localStorage.setItem('cars', JSON.stringify(action.cars))
      return { ...state, cars: action.cars }

    case 'updateCars':
      var cars = state.cars
      var carIndex = cars.findIndex((car) => car.id === action.car.id)
      cars[carIndex] = action.car
      localStorage.setItem('cars', JSON.stringify(cars))
      return { ...state, cars }

    case 'deleteCars':
      var cars = state.cars
      cars = cars.filter((car) => car.id !== action.id)
      localStorage.setItem('cars', JSON.stringify(cars))
      return { ...state, cars }
    default:
      return state
  }
}

export { initial, mainReducer }
