import { promises } from 'fs';

export default class ProductManager {

  constructor(ruta) {
    this.ruta = ruta;
  }

  async save(product) {
    let newId
        if (this.products.length == 0) {
            newId = 1
        } else {
            newId = this.products[this.products.length - 1].id + 1
        }

        const newProd = { ...product, id: newId }
        this.products.push(newProd)
        return newProd
  }

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
      const id =  await promises.readFile(this.ruta, 'utf-8');
      return JSON.parse(id);
    } catch (error) {
      console.log(error);
      return [];  
    }
  }

  async deleteById(id) {
    const index = this.products.findIndex(p => p.id == id)
      if (index == -1) {
        return { error: `elemento no encontrado` }
      } else {
          return this.products.splice(index, 1)
        }
  }

  async deleteAll() {
    this.products = []
  }
  
}