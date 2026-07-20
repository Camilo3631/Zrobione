import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

await connectDB();

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

async function connectDB() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);

  app.locals.db = client.db("zrobione");

  console.log("✅ Conectado a MongoDB");
}

export default app;