import express from "express";
const app = express();

import path  from "path";
import morgan from "morgan";
import ip from "ip";
import router from "./src/routes/index.js";
import { fileURLToPath } from 'url';

const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//views engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "src", "views"));
console.log(app.get("views"));

//middlewares
app.use(morgan("common"));

//statics files
app.use(express.static(path.join(__dirname, "src", "public")));

//routes
app.use(router);

app.listen(port,()=> {
    console.log(`http://127.0.0.1:${port}`);
    console.log(`http://${ip.address()}:${port}`);
});