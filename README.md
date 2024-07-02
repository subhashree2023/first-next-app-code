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
   page.js,layout.js are reserved file name for page content and shell around one or more pages respectivelly.
   we also have an icon.png file in project root,and that's another special file name(icon is reserve name) actually.If you add an image called icon,directly in the app folder then it will be used as a favicon(in this proj,icon showing on left corner of brower tab) by NextJS.(we have not setup this icon on rootlayout page.but it still showing)
   I have added a folder name 'components' and created a standard rect component there. As we added a foler inside 'app' ,it doesn't mean we should be able visit[url/components].It will trough a [404error] if we will do this because this file is ignored by Nextjs when it's come to routing as we don't have page.js file in here.

