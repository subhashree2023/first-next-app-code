/**if URL: http://localhost:3000/meals/[anything], then this page will be rendered except URL: http://localhost:3000/meals/share  because Nextjs is smart enough to see
 * and understand that there is a more specifically named folder(named share), which therefore has precedence over this dynamic segment.
 * But anything except share ,like ABC,or my dash meal will be treated as a value for this dynamic segment and will lead to the activation of this page.js file. */

import Image from 'next/image';
import classes from './page.module.css';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

export default function MealDetailsPage({params}){
    /**Next passes some special props to these special files or to these components in these special files. 
     * every component that's stored in a page.js file will receive a special params prop,which we can destructure.
     * And this params prop will then itself contain an object as a value where any dynamic path segment that's configured for this route will be stored as a key-value pair.
     * And this name (mealSlug) between those square brackets will be used as a key and the actual value encoded in the URL will be used as a value for that key.
    */

    const meal=getMeal(params.mealSlug);
    //console.log(meal)
    //without this if condition,error msg is showing when user requesting meals out of list(when change slug in utl).out of list data couldn't found.so it's not an error.should show no found msg.
    if(!meal){
        notFound();
    }
    meal.instructions=meal.instructions.replace(/\n/g,'<br />');

    return(<>
    <header className={classes.header}>
        <div className={classes.image}><Image src={meal.image} alt={meal.title} fill/></div>
        <div className={classes.headerText}>
            <h1>{meal.title}</h1>
            <p className={classes.creator}>by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
            <p className={classes.summary}>{meal.summary}</p>
            </div>
    </header>
    <main className={classes.main}>
        <p className={classes.instructions} dangerouslySetInnerHTML={{__html:meal.instructions}}></p>
        {/** dangerouslySetInnerHTML is a feature in React that lets you inject raw HTML into your components. 
         * We use it when we need to render HTML content that comes from a source we don't fully trust, or when we want to dynamically generate HTML. 
         * However, it's called "dangerous" because using it incorrectly can expose your app to security risks like cross-site scripting (XSS) attacks. 
         * So, we only use dangerouslySetInnerHTML when we're confident that the HTML we're injecting is safe and properly sanitized.
         * 
         * this prop then wants a object as a value,and that object should have an __html property,which then contains the actual HTML code that should be output on the screen.*/}
    </main>
    </>);
}