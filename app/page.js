import Link from "next/link";

import Header from './components/header';

//this is root page js file whick is responsible for the home page like my-page.com/,this file in app folder relly needed to setup routing.
export default function Home() {
  /**with NextJS,we would build full-stack applications where the content is rendered on the backend(page.js),and therefore it makes sense that it's no longer 
   * happening in the front-endon the client side.
   * But actually the great thing about NextJS is that we get both.
   * When we visit a page for the first time by, for example, manually entering the URL(my-page.come/about),
   * then indeed it's rendered on the server,we get the finished page, and we're here.
   * But if we are on a page and we then navigate around by clicking links, for example,NextJS allows us to actually stay in a single-page application
   * and update the UI with help of client-side JavaScript code.Now, technically the content of the Next page will still be pre-rendered on the server,
   * but it will then be updated on the client side with client-side JavaScript code(finished page(required page) will be served qhwn we will visit the page for 1st time.). */
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      {/**with anchor tag it will always load a new page(check reload or cross icon left upper corner of url)(not satisfying singlepage app)
       * So we will use Link(provided by next/link) which will ensure that we will stay at a singlepage app
       */}
      <p><Link href="/about" >About us</Link></p>
    </main>
  );
}
