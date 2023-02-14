import UserManager from "./Manager/UserManager.js";

const userManager = new UserManager();

const env = async() => {
    const users = await userManager.getUsuarios();
    console.log(users);

    const user = {
        nombre: 'Mora',
        apellido: 'Ramos',
        nombre_usuario: 'mora',
        contrasena: '123'
    }

    await userManager.crearUsuario(user);
    const segundoLlamadoUsuarios = await userManager.getUsuarios();
    console.log(segundoLlamadoUsuarios);

    await userManager.validarUsuario('mora', '123');
    await userManager.validarUsuario('mora', '1234');
};

env();