import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../car/Car";
import CarForm from "../carForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);

    const [updateAllCars, setUpdateAllCars] = useState(null);

    const [carUpdate, setCarUpdate] = useState(null)

    useEffect(()=> {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[updateAllCars])

    return (
        <div>
            <CarForm setUpdateAllCars={setUpdateAllCars} carUpdate={carUpdate}/>
            <hr/>
            {cars.map(car=><Car key={car.id} car={car} setCarUpdate={setCarUpdate}/>)}
        </div>
    );
};

export default Cars;