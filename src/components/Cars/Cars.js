import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/Carform";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [allCars, setAllCars] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [allCars])
    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate}/>
            {
                cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)
            }
        </div>
    );
};

export {Cars};