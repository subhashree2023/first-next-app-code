import sql from 'better-sqlite3';

const db=sql('meals.db');

export async function getMeals(){
   //await new Promise((resolve)=>setTimeout(resolve,2000));//to delay the output for 2secs
   return db.prepare('SELECT * FROM meals').all();//.run() used while inserting data,to fet single row .get() can use
   /**sqllite code doesn't produce promise but as MealPage is a server side function ,so it can be converted to async function. 
    * and if we have some code that uses promise then we can use await .
    * we are making getMeals function as async because it will return a promise because sqllite code don't.
   */
}