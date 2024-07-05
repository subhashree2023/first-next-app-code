/** NextJS actually passes a props object to all those page components.And all these page components get one special prop,which you can pull out with help of destructuring,
 * and that's a params prop, which again,is set by NextJS.
 * params.prop will be an object where every placeholder you had in such a dynamic route here will be a key.And the value stored 
 * under that key will be the concrete value encoded in the URL.So post-1, for example.And we can see that if we output it by accessing params.slug here.
 * Tthis is a great feature to reach out to a database where your blog posts might be stored and fetch the blog post content/delails with that slug .
 */
export default function BlogPostPage({params}){
    return <main>
        <h1>Blog Post Page</h1>
        <p>{params.slug}</p>
        <p>{params.slug}</p>
    </main>
}