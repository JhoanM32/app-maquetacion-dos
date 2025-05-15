
import Productos from "../pages/Productos";
import VistaImagenes from "../pages/VistaImagenes"; 
import VistaCliente from "../pages/VistaCliente";
import ProductosVer from "../pages/ProductosVer";
import UsuarioClientes from "../pages/UsuarioClientes";
import Clientes from "../pages/Clientes";

export let routes = [

    {
        path: "/",
        element: <Clientes />,
    },
    {
        path: "/productos",
        element: <Productos />, 
    },
    {
        path: "/usuarios-clientes",
        element: <UsuarioClientes />,
    },
    {
        path: "/productos-ver",
        element: <ProductosVer />,
    },
    {
        path: "/vista-imagenes",
        element: <VistaImagenes />,
    },
    {
        path: "/vista-cliente",
        element: <VistaCliente />,
    }
];