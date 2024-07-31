//as i am using this image picker in meal related item,so added under subfolder meals
import classes from './image.picker.module.css';

export default function ImagePicker({label,name}) {
    return (<div className={classes.picker}>
    <label htmlFor={name}>{label}</label>
    <div>
    <input type="file" id={name} accept="image/png,image/jpeg" name ={name} />
    </div>
    </div>);
}