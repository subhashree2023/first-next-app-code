This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Note:
Below mentioned filenames are only reserved when creating them inside of the app/ folder (or any subfolder). Outside of the app/ folder, these filenames are not treated in any special way.Find more here(https://nextjs.org/docs/app/api-reference/file-conventions)
page.js => Create a new page (e.g., app/about/page.js creates a <your-domain>/about page)

layout.js => Create a new layout that wraps sibling and nested pages

not-found.js => Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)

error.js => Fallback page for other errors (thrown by sibling pages or nested pages or layouts)

loading.js => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data

route.js => Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

   page.js,layout.js are reserved file name for page content and shell around one or more pages respectivelly.

   we also have an icon.png file in project root,and that's another special file name(icon is reserve name) actually.If you add an image called icon,directly in the app folder then it will be used as a favicon(in this proj,icon showing on left corner of brower tab) by NextJS.(we have not setup this icon on rootlayout page.but it still showing)

   I have added a folder name 'components' and created a standard rect component there. As we added a foler inside 'app' ,it doesn't mean we should be able visit[url/components].It will trough a [404error] if we will do this because this file is ignored by Nextjs when it's come to routing as we don't have page.js file in here.

   I have moved components folder to root folder(outside of app) as it's not used for routing.This is just to Organize my Next Project.We can take a reference of this doc to see different [project organization] technique. (https://nextjs.org/docs/app/building-your-application/routing/colocation)
   
   @ symbol in import path to refer to the root project like ('../components/header' to '@/components/header'). @/* alias for "./*"

   Dynamic Routing:
   Dynamic route is a route which we only define once,but which is then capable of rendering different pages for different blog posts.
   And in NextJS, we can create such a dynamic route by adding a nested folder where we use square brackets.
   [] special syntax supported by NextJs.
   We can create a folder like [] and Inside the square bracket we can put any place holder name(example [slug]). and for rendering page content we need page.js file in that folder.
 loading.js is a reserved file name to show data loading msg to user.

