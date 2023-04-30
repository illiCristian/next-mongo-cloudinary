//npm install mongoose
import { connect, connection } from "mongoose";
//Validamos que la conexion no este abierta antes de abrirla, para evitar que cada vez que se haga una consulta a la base de datos se cree  una nueva conexión
const conn = {
  isConnected: false,
};
//Creamos la función para conectarnos a la base de datos y en .env creamos la variable MONGODB_URL que contiene la url de la base de datos
export async function dbConnect() {
  if (conn.isConnected) return;
  try {
    const db = await connect(process.env.MONGODB_URL);
    //Validamos que la conexión se haya realizado correctamente
    conn.isConnected = db.connections[0].readyState;
    console.log(db.connection.db.databaseName, "DB connected");
  } catch (error) {
    console.log(error);
  }
}
//Escuchamos los eventos de conexión y error
connection.on("connected", () => {
  console.log("MongoDB connected");
});

connection.on("error", (err) => {
  console.log(err, "DB connection error");
});
