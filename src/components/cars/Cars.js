import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../car/Car";
import CarForm from "../carForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(()=> {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[])
    return (
        <div>
            <CarForm/>
            <hr/>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;