'use client';

export default function Error({error}){ //nextjs pass error prop to the component
    /**the actual error message will actually be hidden by NextJS so that you can't accidentally expose any information that shouldn't be exposed to your end users.
     * But if your error would be an object that also contains some error code or anything like that, you could use that here in this component to show a more fine tuned error message. */
    return(<main className="error">
    <h1>An Error Occured</h1>
    <p>{`Failed to create Meal.${error}`}</p>{/**I have not used prop data to show ,only generic msg.But can use propertys of prop to show msg */}
    </main>)
}