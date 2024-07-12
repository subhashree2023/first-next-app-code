import Link from "next/link";

import classes from './page.module.css';
import MealsGrid from "@/components/meals/meals-grid";

export default function MealsPage(){
    return(<>
    <header className={classes.header}>
    <h1>Deliciuous meals created <span className={classes.highlight}>by you</span></h1>
    <p>Choose your favorite recipe and cook it yourself!</p>
    <p className={classes.cta}>
        <Link href="/meals/share">Share your Recipe</Link>
    </p>
    </header>
    <main className={classes.main}>
        <MealsGrid meals={[]}/>
    </main>
    <p><Link href="meals/meal-1">Meal 1</Link></p>
    <p><Link href="meals/meal-2">Meal 2</Link></p>
    <p><Link href="/meals/share">Share</Link></p>
    </>);
}