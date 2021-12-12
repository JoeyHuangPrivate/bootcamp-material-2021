import { ADD_CAR, START_CAR, STOP_CAR } from '../utils/actions';

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_CAR: {
      const newCarId = state.cars[state.cars.length - 1].id + 1;
      const newCar = { ...action.payload /* make, model, year */, id: newCarId };

      return {
        ...state, // { cars, boats, etc } => cars, boats, etc
        cars: [...state.cars /*
                {id, make, model, year, isRunning },
                {id, make, model, year, isRunning} */,
              newCar],
      };
    }
    case START_CAR: {
      const carIndex = state.cars.findIndex((car) => car.id === action.payload);
      const updatedCar = { ...state.cars[carIndex] /* id, make, model, year, isRunning  */, isRunning: true };

      const carsCopy = [...state.cars]; // {car1 props}, {car2 props}, {car3 props}
      carsCopy[carIndex] = updatedCar;

      return {
        ...state,
        cars: carsCopy,
      };
    }
    case STOP_CAR: {
      const carIndex = state.cars.findIndex((car) => car.id === action.payload);
      const updatedCar = { ...state.cars[carIndex], isRunning: false };

      const carsCopy = [...state.cars];
      carsCopy[carIndex] = updatedCar;

      return {
        ...state,
        cars: carsCopy,
      };
    }
    default: {
      return state;
    }
  }
}
