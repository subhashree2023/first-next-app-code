/**if URL: http://localhost:3000/meals/share, then this page will be rendered */
'use client';
import {useFormState} from 'react-dom';

import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/action';
import MealsFormSubmit from '@/components/meals/meals-form-submit';

export default function ShareMealPage() {
  /** we can handle validation error in more elegent way with useFormState() hook
   * useFormState needs two arguments.And the first argument is the actual Server Action(shareMeal) 
   * that should be triggered when the form is submitted,
   * The second argument you pass to useFormState is the initial state of this component, means the initial value
   * that should be returned by useFormState before this action has been triggered and yielded a response.
   * initial value should  reassemble the shape of that response,we will eventually send back(here we are getting value from share meal in a object with message(key) property(a sting value))
   * useFormState will give an array with two elements,one is current state(current response),so the latest response can be returned by this server action in the end.
   * formAction wii be the value of action prop of Form(instead of direct shareMeal,formAction will trigger/invoke shareMeal).
   * useFormstate() will work as middle man.
   * Now with useFormState(), shareMeal() will accept (useFormstate will pass) two params (when it executes) when form get submitted.
   * 2nd param will be formData,and now first will be previous State.
   */
  const [state,formAction]=useFormState(shareMeal,{message:null})

    /**Now if we want to make this page to client component(by using 'use client' on top) then it will throw an error that we can't define server action inside client component.
     * To use it inside client component,we can either export then from a separate file(with 'use server' on top of that file) or pass them through props from server component.
     * and here we have JsX code ,so to make this page lean and clean ,form submission handling logic might be in a different file(here action.js). 
      */
    
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image"/>
          {state && <p>Invaild input</p>}
          <p className={classes.actions}>
            {/**Here i want to show submitting... text when data are submitting in place of Share meal.For that we need to know submission status of the form,that we can get using react's useFormStatus hook(this hook can be used with next Js only),
             * but this hook will give submission status of form if it's inside of that form for which it should give the status,means inside of some component inside of that form.
             * again useFormStatus is a react hook,so it will work on client component.So we will create a client componet and change button text conditionally on status change and render that component here 
             */}
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}