/**A blog can have multiple blog posts.and to see content of each blog post we need multiple folders and and each folder have their page content.
 * this would mean that we need to add a new folder whenever a new blog post is added to the database or wherever we're storing them, and 
 * that is not scalable and not maintainable. So we need dynamic routing for these posts. 
 * 
 * Dynamic route is a route which we only define once,but which is then capable of rendering different pages for different blog posts.
 * And in NextJS, we can create such a dynamic route by adding a nested folder where we use square brackets.This is a special syntax supported by NextJS,
 * where we then put any placeholder, any identifier of our choice between those square brackets, example [slug] and to render some content we need page.js . 
 * 
 * This square bracket thing here simply tells NextJS that we want to have some path segment after blog in this case, but that we don't know the exact value of the segment yet.
 * And it's then this placeholder, this identifier slug that will give us access to the concrete value that we do get when that route is loaded.
 * Because NextJS actually passes a props object to all those page components.And all these page components get one special prop,which you can pull out with help of destructuring,
 * and that's a params prop, which again,is set by NextJS.
 */

import Link from "next/link";

export default  function BlogPage(){
    return <main>
        <h1>The Blog Page</h1>
        <p><Link href="/blog/POST-1">POST-1</Link></p>
        <p><Link href="/blog/POST-2">POST-2</Link></p>
    </main>
}