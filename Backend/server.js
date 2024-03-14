import app from "./app.js";
import cloudinary from "cloudinary"
import { Server } from 'http';

const server = new Server(app);

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRECT,
})

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});

