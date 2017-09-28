// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const ADD_CAR = 'ADD_CAR';
export const FETCH_CAR = 'FETCH_CAR';

export function fetchCar(id) {
  const url = `https://wagon-garage-api.herokuapp.com/cars/${id}`;
  console.log('fetchCar: ' + url);
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: FETCH_CAR,
    payload: promise // Redux Promise will resolve it!
  };
}

export function fetchCars(myGarage) {
  const url = `https://wagon-garage-api.herokuapp.com/FastAndFuriousGarage/cars`;
  console.log('fetchCars: ' + url);
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function createCar(body, callback) {
  const url = "https://wagon-garage-api.herokuapp.com/FastAndFuriousGarage/cars";
  console.log('createCar: ' + url);
  console.log(body);
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json())
    .then(callback);

  return {
    type: ADD_CAR,
    payload: request
  };
}
