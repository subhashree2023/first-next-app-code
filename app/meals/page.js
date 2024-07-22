import Link from "next/link";

import classes from './page.module.css';
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export default async function MealsPage(){
    const meals=await getMeals();
    //console.log(meals);
    return(<>
    <header className={classes.header}>
    <h1>Deliciuous meals created <span className={classes.highlight}>by you</span></h1>
    <p>Choose your favorite recipe and cook it yourself!</p>
    <p className={classes.cta}>
        <Link href="/meals/share">Share your Recipe</Link>
    </p>
    </header>
    <main className={classes.main}>
        <MealsGrid meals={meals}/>
    </main>
    </>);
}