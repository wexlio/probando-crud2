import app from "./server.js"
import { connectMongoDb } from "./utils/mongoose.js";


async function hello(){
    await connectMongoDb();
    app.listen(app.get("port"), (req, res) => console.log("Listen on port:", app.get("port")))
}

hello()

