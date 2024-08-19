# Backend Task Level 1

## Requirements

- Use TypeScript as programming language.
- Use ExpressJS as framework.
- Use PostgreSQL as database.

Build a server application, that has two endpoints related to user.

- GET `/user`

  - Get llist of all users in the database as json format.
  - Success status code is `200`.
  - Internal server error `500`.

- POST `/user`
  ```json
  {
    "name": "Dawood Alkawaz",
    "age": 25
  }
  ```
  - Both **name** and **age** are required.
  - Name must be a string, neither less than 2 nor more than 25 characters.
  - Age must be a positive integer.
  - Return `400` Bad request if the body did not pass the above checks with graceful error message.
  - Add user to database and return it as json with `201` created code in case of success.
  - If anything goes wrong return `500` Internal Server Error.

## Overview

- Clone repository `git clone [repoUrl]`.
- Install dependicies `cd backend-task-1` & `npm install`.
- `npm run start`.

## MVC

File structure based on **M**odel **V**iew **C**ontroller design to seperate application logic.
`dist` represent the compiled JavaScript.

## Endpoints

### Add User

Request:

```json
POST http://127.0.0.1:3000/user

{
    "name": "Dawood Alkawaz",
    "age": 25
}
```

Response

```json
201 CREATED

{
    "id": 1,
    "name": "Dawood Alkawaz",
    "age": 25
}
```

```json
400 BAD REQUEST

{
    "message": "Name must be less than 25 characters"
}
```

```json
500 INTERNAL SERVER ERROR

{
    "message": "Internal Server Error"
}
```

### Get Users

Request:

```json
GET http://127.0.0.1:3000/user
```

Response

```json
200 OK

[
    {
        "id": 1,
        "name": "Dawood Alkawaz",
        "age": 25
    },
    {
        "id": 2,
        "name": "Karrar Ahmad",
        "age": 25
    }
]
```

```json
500 INTERNAL SERVER ERROR

{
    "message": "Internal Server Error"
}
```
