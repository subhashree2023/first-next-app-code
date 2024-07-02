/**Layout(reserved name) page will do a layout into which a page will be rendered. 
 * and every Next project requires atlest one layout file,so one layout file on top of app folder,i.e. root layout file.
 * other folder can have their own layout file with will only apply to the pages in that folder and their nested folder.
 * example about folder.
 * **
 * the rootlayout should contain html and body tag like below.page contents will render in body tag as children.
 * for header ,like to render title or metadata,those will be populated in NextJs by a special variable called meatadata.
 * It's a reserved name like layout and page.
*/
import './globals.css'

/** if we export a variable or constant with metadata name,it should contain an object where you can then set the title of the page and the description of the page,
 * and also some other metadata fields,which will then applied to all pages that are covered by that layout.
 * So, that's why we don't have the head section here,simply because all the content that goes into head is set with the metadata,or automatically behind the scenes by NextJS. */
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
