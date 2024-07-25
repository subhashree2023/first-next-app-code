import { Suspense } from "react";
import Link from "next/link";

import classes from './page.module.css';
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

/**if we use loading.js ,whole page content renders after getting meals data but here header doesn't depend on meal data,so it should render on page load.
 * Suspense is a component provided by React that allows you to handle loading states and show fallback content until some data or resource has been loaded.
 * So whenever we have a component like Meals(),which performs some data fetching and returns such a promise here, such components will trigger suspense
 * to show the fallback until they're done.
 * NextJS partially renders this page with all the content that can already be rendered,and then streams in and renders this loaded content once it has been loaded.
 * 
 * We have created a new component Meals() to separate data fetching code,So this component  will fetch the data and then it will be loaded to mealsgrid 
 */
async function Meals(){
    const meals=await getMeals();
    // console.log(meals);
    return(
        <MealsGrid meals={meals}/>
    );
};

export default function MealsPage() {
  const loadingMsg = <p className={classes.loading}> Fetching Meals....</p>;
 
  return (
    <>
      <header className={classes.header}>
        <h1>
          Deliciuous meals created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={loadingMsg}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}