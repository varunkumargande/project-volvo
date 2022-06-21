import { DataTypes } from ".";

export type CarEndpoints = {
    // GET CARS
    'GET /api/cars.json': {
        response: DataTypes.CarObject[];
      };
  };

export type Endpoints = CarEndpoints