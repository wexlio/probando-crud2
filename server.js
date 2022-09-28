import express from "express";
import {engine} from 'express-handlebars';
import path from "path";
import {router} from "./routes/routes.js"
import morgan from "morgan"
import fileUpload from "express-fileupload"
import methodOverride from "method-override"
import cors from "cors"


//Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 3001);
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
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use(morgan("dev"));

app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : './public/uploads'
}));

//Global variables


//Routes
app.use(router)

//Static files
app.use(express.static("public"))


export default app;