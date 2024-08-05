/**if URL: http://localhost:3000/meals/share, then this page will be rendered */
import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';

export default function ShareMealPage() {
    /*when it comes to handling form submissions,Normally in react We can go to the component that contains the form and then we could add the onSubmit prop
    *and define a function that should be executed when the form is submitted.There, we could then prevent the browser default,manually collect all the data,
    *and send that data to a backend.
    *But again, here we already are on the backend,at least kind of. Next .js gives a powerful and convenient way to do this submission process.
    *Normally in vanilla react ,form action is some kind of path/URL  to which the request should be sent,but here we can perform form submit by setting form action prop to a function(server action).
    *we can create a function in the component that holds the form,
    *Here we explicitly define a function to Server Action(by adding a special directive inside of this function body that's the 'use server' directive.) that means it will only execute in server side not in browser.
    *Must add the "async" keyword to function.
    *This feature exists in React,it doesn't really work in Vanilla React apps. as you need a framework like Next to unlock this feature and use it.
    *when this form is submitted,Next.js will, behind the scenes,create a request and send it to this Next.js server that's serving the website ,
    *so that this function gets triggered,and you can then handle the form submission on the server.So, that function will then execute on the server,not in the client.
    *And this function will then automatically receive that formData that was submitted.So, the data that was gathered by the inputs in the form collected in a formData object,
    *using that formData class that's available in JavaScript.
    */
   async function shareMeal(formData){
    'use server';
    const meal={ //store all inpot data in a key value pair,input elemet name would be formData object property
        title:formData.get('title'),
        summary:formData.get('summary'),
        instructions:formData.get('instructions'),
        image:formData.get('image'),
        creator:formData.get('name'),
        creator_email:formData.get('email')        
    }
    console.log(meal);
   }
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
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}