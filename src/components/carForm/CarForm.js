import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const CarForm = ({setUpdateAllCars, carUpdate}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode:'all'});
    useEffect(()=>{
        if (carUpdate){
            setValue('brand', carUpdate.brand, {shouldValidate:true})
            setValue('price', carUpdate.price,{shouldValidate:true})
            setValue('year', carUpdate.year, {shouldValidate:true})
        }
    },[carUpdate])
    const save = async (car)=>{
        const {data} = await carService.create(car);
        setUpdateAllCars(prev=>!prev);
        reset()
    }

    const update = async (car)=>{
        const {data} = await carService.updateById(car);
        carUpdate(prev=>!prev)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carUpdate  ? update:save)}>
            <input type='text' placeholder={'brand'} {...register('brand', {
                pattern: {
                    value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message:'Brand must have litters'
                },
                required:{value: true, message:'required'}
            })}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type='text' placeholder={'price'} {...register('price', {
                valueAsNumber:true,
                min:{value:0, message:'min 0'},
                max:{value:1000000, message:'max 1000000'
                },
                required:{value: true, message:'required'}
            })}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type='text' placeholder={'year'} {...register('year', {
                valueAsNumber:true,
                min:{value:1990, message:'min 1990'},
                max:{value:new Date().getFullYear(), message:'max 2023'
                },
                required:{value: true, message:'required'}
            })}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carUpdate?'update':'create'}</button>
        </form>
    );
};

export default CarForm;