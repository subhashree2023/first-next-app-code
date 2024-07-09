/**if URL: http://localhost:3000/meals/[anything], then this page will be rendered except URL: http://localhost:3000/meals/share  because Nextjs is smart enough to see
 * and understand that there is a more specifically named folder(named share), which therefore has precedence over this dynamic segment.
 * But anything except share ,like ABC,or my dash meal will be treated as a value for this dynamic segment and will lead to the activation of this page.js file. */
export default function MealDetailsPage(){
    return(<>
    <h1>Meal deatils</h1>
    </>);
}