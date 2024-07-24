/**We can use this error file directly inside app/ to use for all nested page(can use it as granular as needed).
 * But here i have added it to meals ,so it can be used by meal page and all nested page of meals.
 */
/**Declare tis as client component.otherwise error will be thrown as "./app/meals/error.js must be a Client Component" */
"use client";

export default function Error({error}){ //nextjs pass error prop to the component
    /**the actual error message will actually be hidden by NextJS so that you can't accidentally expose any information that shouldn't be exposed to your end users.
     * But if your error would be an object that also contains some error code or anything like that, you could use that here in this component to show a more fine tuned error message. */

    return(<main className="error">
    <h1>An Error Occured</h1>
    <p>Failed to fetch meal data .Please try again later.</p>{/**I have not used prop data to show ,only generic msg.But can use propertys of prop to show msg */}
    </main>)
}