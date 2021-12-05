# My personal website

Welcome in my personal website codebase. The website is available [here : gabbloquet.github.io](https://gabbloquet.github.io/).  
Objective is to show my skills, background and objectives. 🎯    
In addition, I use it to host my articles. 📝 

_Don't hesitate to fork it if you want ;)_

## Get started

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Add an article

1. Write the article (Markdown format) :D
2. Place it on a variable on [articles dir](./src/articles)
3. Insert information about it in [articles array](./src/views/Blog/blog.service.js) with linked content (variable defined above). 

## Technologies

I made the choice to use [Svelte](https://svelte.dev) to develop it because it's a really simple static website.

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

## Building, running in production mode and deploy

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

```bash
npm run deploy
```

To deploy the application thanks to github pages.


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```bash
npm run start
```

## Other information 

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```