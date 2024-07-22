import sql from 'better-sqlite3';

const db=sql('meals.db');

export async function getMeals(){
   await new Promise((resolve)=>setTimeout(resolve,5000));//to delay the output(data fetch) for 5secs to show loading 
   /**When page load for 1st time or reload it takes time to load but once loaded when we chage pages and come back to same page,it won't take time to load data 
    * because next js cached these data.So it loads data from cache.there is an issue in Next js, so the cache works some times and sometimes not while changing route frote from community to browse meals.  */
   return db.prepare('SELECT * FROM meals').all();//.run() used while inserting data,to fet single row .get() can use
   /**sqllite code doesn't produce promise but as MealPage is a server side function ,so it can be converted to async function. 
    * and if we have some code that uses promise then we can use await .
    * we are making getMeals function as async because it will return a promise because sqllite code don't.
   */
}