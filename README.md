# Splish

A Simple Online Marketplace where users can sell and buy new and used items and also communicate or leave a review on an item.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  <!-- - [Screenshot](#screenshot) -->
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
  <!-- - [Author](#author) -->
- [Acknowledgments](#acknowledgments)
- [Contribution](#contribution)

- Extra Packages
  - Zod - For validation
  - dayjs - Date and time formating
  - md5 - Generating hash from email for user avatars
  - bcrypt - Generate hash for storing passwords
  - nanoid - Generate unique id _(faster than uuid)_

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Authentication (login, logout)
- Create an account, update an account
- Add, update, and delete their products
- Comment/review on other products
- Message/contact the product owner
- Browse products
- Browse by category of products
- Dashboard for items
- Inbox to view messages

<!-- ### Screenshot -->
<!-- ![](./screenshot.jpg) -->

### Links

- GitHub Repo: [GitHub Repo Link](https://github.com/benjithorpe/splish)
- Live Demo: [Live Demo Link](https://splish.vercel.app/)

## My process

### Built with

- Semantic HTML5 / CSS
- [SvelteKit](https://kit.svelte.dev) - JavaScript Svelte Meta Framework
- [Prisma](https://prisma.io) - Nodejs ORM
- [UnoCSS](https://github.com/unocss/unocss) - CSS Engine, also makes use of other CSS frameworks
- [Iconify Icons](https://iconify.design/) - For Icons
- [SQLite](https://www.sqlite.org/) - For dev database

### Useful resources

- [SvelteKit](https://kit.svelte.dev) - This is the official Sveltekit documentation.
- [Svelte](https://svelte.dev) - Best place to learn about the Svelte framework for beginners.
- [Learn Svelte and Sveltekit](https://learn.svelte.dev) - Best Interactive online plaground to learn about the Svelte and Sveltekit _(still in development)_.

<!-- ## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername) -->

## Acknowledgments

The [Original version](https://www.youtube.com/watch?v=ZxMB6Njs3ck) from [Code With Stein](https://www.youtube.com/@CodeWithStein) built in Django

## Contribution

Click the `fork` button to fork the repo

Clone your forked repo
_(change `your-username` to your username on GitHub)_

```bash
git clone https://github.com/your-username/splish.git
```

navigate into the folder

```bash
cd splish
```

Install the dependencies

```bash
npm i
```

Start the server and open the app in a browser

```bash
npm run dev
```

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
