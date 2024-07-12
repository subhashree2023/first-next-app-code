'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from './nav-link.module.css';

/**We should use use client as far down the component trees,so that we can only turn the component that needs to be converted to client component.
 * So that majority of components can stay as server component.that we don't lose the server component advantages for most of our components.
 * 
 * Here main-header component contains a lot of markups that doesn't need to be a client component but by using use client on top of that file ,we made it to client component.
 * It's not good approach,we can only do dependant markups to client component by separating those components to new component file and make it as client component by using use client.
 * we can import this client component to main header component,this way header component will be a server component.
 */
export default function NavLink({href,children}){
    const path=usePathname();
return (
    <Link href={href} className={path.startsWith(href)?`${classes.link} ${classes.active}`: classes.link}>{children}</Link>
);
}