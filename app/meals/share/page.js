/**if URL: http://localhost:3000/meals/share, then this page will be rendered */

import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/action';
import MealsFormSubmit from '@/components/meals/meals-form-submit';

export default function ShareMealPage() {

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
        <form className={classes.form} action={shareMeal}>
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
          <p className={classes.actions}>
            {/**Here i want to show submitting... text when data are submitting in place of Share meal.For that we need to know submission status of the form,that we can get using react's useFormStatus hook(this hook can be used with next Js only),
             * but this hook will give submission status of form if it's inside of that form for which it should give the status,means inside of some component inside of that form.
             * again useFormStatus is a react hook,so it will work on client component.So we will create a client componet and change button text conditionally on status change and render that component here 
             */}
            <button>Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}