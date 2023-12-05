// import { isValid } from "zod";
import { connection } from "../../db_config.js";

export class Autos_Models {
  //obtiene autos
  static async getAll() {
    try {
      const [autos_nuevos] = await connection.query(
        `SELECT 
          Marca, Modelo, Precio, Anio, Color, Imagen
          FROM autos_nuevos`
      );
      return autos_nuevos;
    } catch (error) {
      console.error(
        `Error al obtener autos nuevos: ${(error.message = "no hay autos")}`
      );
      throw error;
    }
  }

  //busca por id
  static async getById(id) {
    const [autos_nuevos] = await connection.query(
      `SELECT
          Marca, Modelo, Anio, Color, Precio, Imagen FROM autos_nuevos.autos_nuevos WHERE id = ?`,
      [id]
    );
    return autos_nuevos;
  }

  //elimina peli
  static async deleteOne(id) {
    const [info] = await connection.query(
      `DELETE FROM autos_nuevos WHERE autos_nuevos.autos_nuevos.id = ?`,
      [id]
    );
    return info.affectedRows;
  }

  //agrega peli
  static async addOne(autos_nuevos) {
    const { Marca, Modelo, Anio, Color, Precio, Imagen } = autos_nuevos;

    try {
      const result = await connection.query(
        `
        INSERT INTO autos_nuevos (Marca, Modelo, Anio, Color, Precio, Imagen) 
        VALUES (?, ?, ?, ?, ?, ?)`,
        [Marca, Modelo, Anio, Color, Precio, Imagen]
      );

      return result ? result : null;
    } catch (error) {
      console.error("Error inserting auto:", error);
      throw new Error("Error inserting auto into the database");
    }
  }

  //actualización
  static async updateOne(id, autoParcial) {
    let queryString = "";
    for (const key in autoParcial) {
      queryString += `${key} = ?, `;
    }
    queryString = queryString.slice(0, -2); // Eliminar la coma al final
    const values = Object.values(autoParcial);

    const [resultado, _info] = await connection.query(
      `UPDATE autos_nuevos SET ${queryString} WHERE autos_nuevos.autos_nuevos.id = ?`,
      [...values, id]
    );

    return resultado.affectedRows;
  }
}
