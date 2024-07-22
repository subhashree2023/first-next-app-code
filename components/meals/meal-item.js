import Image from 'next/image';
import Link from 'next/link';

import classes from './meal-item.module.css';


export default function MealItem({image,title,creator,summary,slug}){
    return(<article className={classes.meal}>
        <header>
        <div className={classes.image}>
            {/** fill is a boolean that causes the image to fill the parent element, which is useful when the width and height are unknown.
             * The parent element must assign position: "relative", position: "fixed", or position: "absolute" style. 
             * By default, the img element will automatically be assigned the position: "absolute" style. */}
            <Image src={image} alt={title} fill/>
            </div>
            <div>
                <h2>{title}</h2>
                <p>by {creator}</p>
            </div>
        </header>
        <div className={classes.content}>
            <p className={classes.summary}>{summary}</p>
        </div>
        <div className={classes.actions}>
            <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
    </article>);
}