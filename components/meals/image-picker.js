//as i am using this image picker in meal related item,so added under subfolder meals
'use client';
import { useRef, useState } from 'react';
import classes from './image.picker.module.css';
import Image from 'next/image';

export default function ImagePicker({label,name}) {
    //To preview image ,we have to get that selected image and store in state
    const [pickedImage,setPickedImage]=useState();
    //to get a reference of input(by using ref in input) to trigger it's behaviour(like click method) from outside of input.
    const imageInputRef=useRef();
    //onclick this function will work on client component because click happen in browser.so we need to convert this server component( default) to client component.
    function handleImagePickClick(){
        //Here i want to for ward that button click to input to get file(forward to choose file click),that we can do with ref(it's a react feature not next js)
        imageInputRef.current.click();
    }

     //this method will be triggered whenever input has a new value
    function handleImageChage(event){
       /**We can get hold of that picked file by using event.target.files and then accessing the first file.
        * This file property will exist because the target of this event is this input, and this file input object, under the hood,  will have such a files property.
        * That will be an array of all the files that have been picked, but here, it'll only be one file that can be picked.
        * and therefore. I'll just access that first file.
        * You could allow the user to pick multiple files by adding the multiple prop in input element to this file inpu */
       const file=event.target.files[0];
       //Reset the previewed image if no image was selected:
       if(!file){
        setPickedImage(null);
        return;
       }

       const fileReader= new FileReader();
       fileReader.readAsDataURL(file);
       /**So we store a function as a value in on load, and this function will then be triggered by the file reader
        * once this read as data URL method, is done,But we don't directly get generatedURL as an input ,so we have to access it by accessing fileReader.result(this is the generated url) */
       fileReader.onload=()=>{ 
        setPickedImage(fileReader.result);
       };
        
    }

    return (<div className={classes.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={classes.controls}>
    <div className={classes.preview}>
        {!pickedImage && <p>No image picked yet</p>}
        {pickedImage && <Image src={pickedImage} alt="image selected by user" fill />}
    </div>
    {/**Added the required prop to the (hidden) <input> element.This ensures that the <form> can't be submitted without an image being selected. */}
    <input className={classes.input} type="file" id={name} accept="image/png,image/jpeg" name ={name} ref={imageInputRef} onChange={handleImageChage} required/>{/**this input is part of DOM but not visible as css applied.We hide it to show/render our custom image picker instead of input file style */}
    <button className={classes.button} type="button" onClick={handleImagePickClick}>Pick an Image</button> {/**By default ,type is submit,here we don't want to submit the form,but to execute somecondition on button click */}
    </div>
    </div>);
}