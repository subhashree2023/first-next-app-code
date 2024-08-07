"use server";

import { saveMeal } from "./meals";

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
    * ----2nd approach------
    * Here everything should be same as above comment except 'use server' declaration location.
    * In page.js ,we were only making that function as server action but as we separated this whole logic to different file,so we are declaring this file as server component file.
    * So now all the function we might define in this file will be treated as server actions.
    * Now we can import this file in client component file and it will work smoothly as both files are different, 
    * if we define both client side code(adding 'use client' page.js file) and server action('use server' inside function of page.js file) in one file then build process of Next js
    *  will not able to separate(client and server code in one file) ,  that in a clean way, and therefore server-side code could accidentally end up on the client side,
    * which could pose security issues and cause other problems as well.
    */

    export async function shareMeal(formData){        
        const meal={ //store all inpot data in a key value pair,input elemet name would be formData object property
            title:formData.get('title'),
            summary:formData.get('summary'),
            instructions:formData.get('instructions'),
            image:formData.get('image'),
            creator:formData.get('name'),
            creator_email:formData.get('email')        
        }
        await saveMeal(meal);
       }