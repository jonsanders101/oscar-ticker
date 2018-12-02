# TheBest.Pictures

A web app for crossing-off and rating every Oscar Best Picture winner as you watch them.

Currently live at **[thebest.pictures](http://thebest.pictures)**.

## Local Setup

Dev Mode:

```bash
$ npm start
```

Production Mode:

```bash
$ npm run prod
```

In a browser, navigate to `localhost:3000`.

## Stack

_An overview of core packages used_

|Package|Major Version|
| --- | --- |
|React|16|
|Redux|4|
|Express|4|
|Webpack|4|
|Less|3|

## Testing

### Tools

- Jasmine
- Enzyme

To run all unit tests:

```bash
$ npm t
```

## Linting

### Tools

- ESLint
- Prettier plugin

To apply Prettier rules across the project:

1.  Install Prettier globally (`$ npm install -g prettier`)
2.  Navigate to the root of this directory.
3.  `$ prettier --write "**/*.js"`
