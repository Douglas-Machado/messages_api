# MESSAGES API

  Create messages CRUD built with nodejs and express

### About this project

#### Languages, Frameworks

* [JS](https://www.javascript.com)

* [NODE](https://nodejs.org/en/)

* [Express](https://expressjs.com)

* [Prisma](https://www.prisma.io)

### Using

 Run `npm install` or `yarn` to get the packages

 Run `npm run dev` or `yarn dev` to start the application

### Request examples

  * POST

  [`localhost:4000/messages`](http://localhost:4000/messages)
```JSON
  {
    "title": "title",
    "content": "content"
  }
```

  * GET

  [`localhost:4000/messages`](http://localhost:4000/messages)

  * UPDATE

  [`localhost:4000/message`](http://localhost:4000/message)
```JSON
  {
    "title": "title",
    "content": "content"
  }
```

  * DELETE

  [`localhost:4000/message`](http://localhost:4000/message)
```JSON
  {
    "title": "title"
  }
```