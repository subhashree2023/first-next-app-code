//we can also add standard react components in Nextjs same like vanilla react.
/**It's a component that automatically not picked up or handled by nextjs(not like page.js or layout). we have to import in in page to use it.
*/
export default function Header(){
return(
    <>
    <img src="/logo.png" alt="A server surrounded by magic sparkles." />
    <h1>Welcome to this NextJS Course!</h1>
    </>
);
}