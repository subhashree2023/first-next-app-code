//as i am using this image picker in meal related item,so added under subfolder meals
'use client';
import { useRef } from 'react';
import classes from './image.picker.module.css';

export default function ImagePicker({label,name}) {
    //to get a reference of input(by using ref in input) to trigger it's behaviour(like click method) from outside of input.
    const imageInputRef=useRef();
    //onclick this function will work on client component because click happen in browser.so we need to convert this server component( default) to client component.
    function handleImagePickClick(){
        //Here i want to for ward that button click to input to get file(forward to choose file click),that we can do with ref(it's a react feature not next js)
        imageInputRef.current.click();
    }

    return (<div className={classes.picker}>
    <label htmlFor={name}>{label}</label>
    <div>
    <input className={classes.input} type="file" id={name} accept="image/png,image/jpeg" name ={name} ref={imageInputRef}/>{/**this input is part of DOM but not visible as css applied.We hide it to show/render our custom image picker instead of input file style */}
    <button className={classes.button} type="button" onClick={handleImagePickClick}>Pick an Image</button> {/**By default ,type is submit,here we don't want to submit the form,but to execute somecondition on button click */}
    </div>
    </div>);
}