# Image Processsing API

A NodeJS project that resizes and serves images sent to the API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need `node@^12` and `npm@^6` installed on your system.

### Installation

A step by step series of examples that tell you how to get a development environment running.

Install all project dependencies with `npm`:
```bash
npm i
```

Now, you can start the application with the predefined scripts:

```bash
npm run dev
# OR
npm run start
```

The application will run on http://localhost:8000.

## API Information

**/image/**

This is a `POST` API that accepts a binary request with the image to be process as body.

You need to send the `height` and `width`, to which the image is to be resized, as query parameters.

Example:
```bash
curl --location --request POST 'http://localhost:8000/image/?width=320&height=200' \
--header 'Content-Type: image/jpeg' \
--data-binary '@/home/user/Pictures/image.jpg'
```

This API will return a filename that can be used to download the resized image.

Example:
```bash
# Response from API: { "filename": "8fca0300-4fe8-11eb-ba0a-53c1805778e7.jpg" }
curl --location --request GET 'http://localhost:8000/8fca0300-4fe8-11eb-ba0a-53c1805778e7.jpg'
```

## Unit Testing

Unit tests can be found inside the `tests` directory.
The unit tests can be run from a predefined script:
```bash
npm run test
```

## Coding Styles

The project uses `husky` for `git` hooks. There are pre-commit hooks to run `eslint` and `prettier` on staged files. There is a pre-push hook that runs the unit tests. The configuration for this is present inside the `package.json` file.

## Built With

* [NodeJS](https://nodejs.org/en/) - The JavaScript runtime.
* [Express](https://expressjs.com/) - The web framework.
* [TypeScript](https://www.typescriptlang.org/) - The language used.
* [Sharp](https://sharp.pixelplumbing.com/) - NodeJS image processor.

## Authors

* **Surya Kant Bansal** - *Initial work* - [skb1129](https://github.com/skb1129)
