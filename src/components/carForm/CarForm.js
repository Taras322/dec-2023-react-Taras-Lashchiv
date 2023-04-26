import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm();
    const save = (data)=>{
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'brand'} {...register('brand', {
                pattern: {
                    value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message:'Brand must have litters'
                }
            })}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type='text' placeholder={'price'} {...register('price', {
                valueAsNumber:true,
                min:{value:0, message:'min 0'},
                max:{value:1000000, message:'max 1000000'}
            })}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type='text' placeholder={'year'} {...register('year', {
                valueAsNumber:true,
                min:{value:1990, message:'min 1990'},
                max:{value:new Date().getFullYear(), message:'max 2023'}
            })}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button>Save</button>
        </form>
    );
};

export default CarForm;