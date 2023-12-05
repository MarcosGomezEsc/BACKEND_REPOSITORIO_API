import { Autos_Models } from "./Autos_Model.js";

export class Autos_Crtl {
  //getAll
  static async getAll(req, res) {
    // const { Marca } = req.query;
    const autos = await Autos_Models.getAll();

    if (autos.length === 0) {
      res.status(404).json({ message: "No se encuentran autos" });
    }

    return res.status(200).json({ message: "autos encontrados" });
  }

  //busca por ID
  static async getById(req, res) {
    const { id } = req.params;

    const autos = await Autos_Models.getById(id);
    if (!autos) return res.status(404).json({ message: "Auto Not Found" });

    res.status(200).json(autos);
  }

  //borra una peli
  static async deleteOne(req, res) {
    const { id } = req.params;

    const result = await Autos_Models.deleteOne(id);
    if (!result) return res.status(404).json({ message: "Car Not Found" });

    res.status(204).end();
  }

  // ...

  //crea nuevo post de auto
  static async addOne(req, res) {
    const { Marca, Modelo, Anio, Color, Precio, Imagen } = req.body;

    try {
      await Autos_Models.addOne({
        Marca,
        Modelo,
        Anio,
        Color,
        Precio,
        Imagen,
      });

      res.status(201).json({ message: "Auto created" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  //actualizar
  static async updateOne(req, res) {
    const { id } = req.params;
    const [isAuto_Nuevo, _info] = await Autos_Models.getById(id);

    if (!isAuto_Nuevo)
      return res.status(404).json({ message: "Auto No Encontrado" });
    const Actualizacion_Auto = await Autos_Models.updateOne(id, req.body);
    Actualizacion_Auto
      ? res.status(200).json({ message: "auto encontrado" })
      : res.status(500).json({ message: "error servicio interno" });
  }
}
