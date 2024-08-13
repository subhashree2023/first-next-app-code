
import MainHeader from "@/components/main-header/main-header";
import MainHeaderBacground from "@/components/main-header/main-header-background";

import './globals.css';

/** 2nd scenario:if we want title of parent with current one (eg:All Meals | NextLevel Food)then 
 * we can add title.templete in parent metadata like this.
 * The %s in the template will be replaced with the specific page title.
 * */
export const metadata = {
  title: {
    template: '%s | NextLevel Food',
    default: 'NextLevel Food',
  },
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
    {/**hydration warning because of extensions like grammaly,codeZilla,wekipedia,LanguageTools etc.So we can use suppresshydration like suppressHydrationWarning="true" . but 
     * it only works one level deep so if you put it in the <html> element, it won't suppress hydration warnings for the <body> element 
     *or we can put chrome://flags/#extensions-menu-access-control into your Chrome browser to enable this flag and restart Chrome. 
     *after restart we can click on the extensions icon (in the upper-right corner of your browser), while you are browsing http://localhost:3000 URL, and toggle those extensions.*/}
      <body >
        <MainHeaderBacground />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
