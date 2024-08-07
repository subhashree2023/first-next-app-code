 'use client'

 import {useFormStatus} from 'react-dom';

 export default function MealsFormSubmit(){
    const {pending}=useFormStatus(); //object destructuring

    return <button type='submit' disabled={pending}>
        {pending?'Submitting':'Share Meal'}
        </button>
 }