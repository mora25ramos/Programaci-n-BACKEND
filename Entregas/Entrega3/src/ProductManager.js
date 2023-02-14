import { promises } from 'fs';

export default class ProductManager {

  constructor(ruta) {
    this.ruta = ruta;
  }

  async save(obj) {}

  async getAll() {
    try {
      const products = await promises.readFile(this.ruta, 'utf-8');
      return JSON.parse(products);
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getById(id){
    try {
      const id = await promises.readFile(this.ruta, 'utf-8');
      return JSON.parse(id);
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async deleteById(id) {
    exports.deleteById = function (req, res) {
      products.findById(req.params.id, function (err, product) {
        product.remove(function (err) {
          if (err) return res.status(500).send(err.message);
          res.status(200).send();
        });
      });
    };
  }

  async deleteAll() {}
  
}