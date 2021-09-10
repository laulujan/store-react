# Store Project

This is an e-commerce web app written in ReactJS (and currently being migrated to TypeScript). It uses Material-UI, React Router DOM, Axios, Redux Toolkit and Redux Persist.

It consumes data from a separate [backend](https://github.com/mfguerrero/crown-store-back).

## Run Locally

### Back End

Clone the backend

```bash
  git clone https://github.com/mfguerrero/crown-store-back.git
```

Go to the project directory

```bash
  cd crown-store-back
```

Open index.js with a text editor and add the following line to the imports:

```bash
  import cors  from "cors";
```

Add the following line between lines 12-16:

```bash
  app.use(cors());
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

### Front End

Clone the frontend

```bash
  git clone https://github.com/laulujan/store-react.git
```

Go to the project directory

```bash
  cd project-react
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

  