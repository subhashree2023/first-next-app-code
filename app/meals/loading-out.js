import classes from './loading.module.css';

export default function MealsLoadingPage(){
return <p className={classes.loading}> Fetching Meals....</p>
}

/** Changed filename to loading-out ,so Next can't consider it as reserved loading.js file to show msg while data loading */