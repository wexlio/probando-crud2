import express from "express";
import {engine} from 'express-handlebars';
import path from "path";
import {router} from "./routes/routes.js"
import morgan from "morgan"


//Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
// const __dirname = path.resolve();
app.set('views', './views');

//Config hansdlebars
app.engine('.hbs', engine({
  defalutLayout: "main",
  layoutsDir: "./views/layouts",
  partialsDir: "./views/partials",
  extname: ".hbs"
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"))

//Global variables


//Routes
app.use(router)

//Static files
app.use(express.static("public"))


export default app;