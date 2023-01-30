import ManagerUsuarios from "./manager/ManagerUsuarios.js"

const manager = new ManagerUsuarios()

const managerUsuarios = async()=> {
    let usuarios = await manager.consultarUsuarios()
    console.log(usuarios)

    const user = {
        nombre: 'Mora',
        apelido: 'Ramos',
        edad: 20,
        curso: 'Backend'
    }

    await manager.crearUsuario(user)
    usuarios = await manager.consultarUsuarios();
    console.log(usuarios)
}

managerUsuarios();
