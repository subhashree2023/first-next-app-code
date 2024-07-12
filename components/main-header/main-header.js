'use client'

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";

import logoImg from "@/assets/logo.png";
import classes from './main-header.module.css';

export default function MainHeader(){
    const path=usePathname();
    return(
<header className={classes.header}>
    <Link className={classes.logo} href="/">
    {/**Warning is telling(without using priority) that you have a large image that is not being loaded optimally.
     *  LCP measures the time from when the user initiates loading the page until the largest image or text block is rendered within the viewport.
     * With images, and other resources, we can use a technique called pre-loading. As soon as the browser hits the preload link, it'll get that resource and continue processing the HTML for the page,
     * 
     * In Next.js, the next/image component has a priority prop, which you can activate to trigger the preload of the resource,
     *   
     * We  should use the priority property on any image detected as the Largest Contentful Paint (LCP) element. It may be appropriate to have multiple priority images, as different images may be the LCP element for different viewport sizes.
     */}
    <Image src={logoImg} alt="A plate with food on it" priority/> 
    NextLevel Food
    </Link>
    <nav className={classes.nav}>
        <ul>
            <li>
                <Link href="/meals" className={path==="/meals"?classes.active:undefined}>Browse Meals</Link>
            </li>
            <li>
                <Link href="/community" className={path==="/community"?classes.active:undefined}>Foodies Community</Link>
            </li>
        </ul>
    </nav>
</header>
    );
}
