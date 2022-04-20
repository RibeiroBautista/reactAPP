const productos = [

    {    
        category: 'electrodomesticos',
        id: '1',
        stock: 45,
        nombre: "TV Smart-50'",
        precio: "$99.999,99",
        popularidad: "9,3 | 10,00",
        imagen: "https://www.lg.com/ar/images/televisores/md06198516/gallery/DES_1_N.jpg"
    },
    {
        category: 'electrodomesticos',
        id: '2',
        stock: 78,
        nombre: "Notebook Lenovo",
        precio: "$84.999,99",
        popularidad: "8,7 | 10,00",
        imagen: "https://img.global.news.samsung.com/latin/wp-content/uploads/2019/01/Notebook-9-Pro-31-e1546961341121.jpg"
    },
    {
        category: 'electrodomesticos',
        id: '3',
        stock: 102,
        nombre: "Iphone 12 PRO-MAX",
        precio: "$189.200,00",
        popularidad: "9,8 | 10,00",
        imagen: "https://www.techinn.com/f/13782/137821856/apple-iphone-12-pro-max-6gb-512gb-6.7.jpg"
    },

    {
        category: 'sillas',
        id: '4',
        stock: 17,
        nombre: 'MicroBell, Negra y Roja',
        precio: '41.250,00',
        popularidad: '9,8 | 10,00',
        imagen: "https://tecnocompro.com/pub/media/catalog/product/cache/f2fda30fa08589bc3d50957538fec3cf/s/i/silla_gamer_microbell_y-1-2442_negra_y_roja_4_.png",
    },
    {
        category: 'sillas',
        id: '5',
        stock: 13,
        nombre: 'Prestigio, Negra y Celeste',
        precio: '42.100,00',
        popularidad: '9,9 | 10,00',
        imagen: "https://prestigio.vteximg.com.br/arquivos/ids/167186-1000-1000/1006500_1.jpg?v=637631704773530000",
    },
    {
        category: 'sillas',
        id: '6',
        stock: 19,
        nombre: 'Patriot, Blanca y Rosa',
        precio: '46.000,00',
        popularidad: '9,7 | 10,00',
        imagen: "https://www.tiendaoi.com/wp-content/uploads/2021/10/4444c2b7-3132-44c5-892d-4185dcd94420.jpg",
    },
    {
        category: 'mesas',
        id: '7',
        stock: 48,
        nombre: 'Escritorio Negro + Luz Led',
        precio: '12.500,00',
        popularidad: '8,4 | 10,00',
        imagen: "https://www.profesionalreview.com/wp-content/uploads/2019/04/1.png",
    },
    {
        category: 'mesas',
        id: '8',
        stock: 39,
        nombre: 'Escritorio Negro y Rojo + Apoyante',
        precio: '12.000,00',
        popularidad: '8,1 | 10,00',
        imagen: "https://media.vandalsports.com/i/640x360/6-2020/202063145741_1.jpg",
    },
    {
        category: 'mesas',
        id: '9',
        stock: 40,
        nombre: 'Escritorio negro y rojo',
        precio: '11.000,00',
        popularidad: '7,9 | 10,00',
        imagen: "https://m.media-amazon.com/images/I/61fl76Iol0L._AC_SX466_.jpg",
    },
    {
        category: 'gabinetes',
        id: '10',
        stock: 52,
        nombre: 'Gabinete, MCE blanco',
        precio: '6.850,00',
        popularidad: '8,8 | 10,00',
        imagen: "https://mcemayoristas.com/wp-content/uploads/2020/11/MACUBE-310-WH-1-600x600.jpg",
    },
    {
        category: 'gabinetes',
        id: '11',
        stock: 51,
        nombre: 'AEROCOOL BIONIC V2',
        precio: '6.499,99',
        popularidad: '8,6 | 10,00',
        imagen: "https://www.brandimia.com/productos/20017.jpg",
    },
    {
        category: 'gabinetes',
        id: '12',
        stock: 71,
        nombre: 'Tecware Nexus Evo',
        precio: '7.000,00',
        popularidad: '8,9 | 10,00',
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750449-MLA44832688447_022021-W.jpg",
    },
        
    {
        category: 'monitores',
        id: '13',
        stock: 125,
        nombre: 'Zowie Benq 60hz',
        precio: '$78.379,99',
        popularidad: '9,1 | 10,00',
        imagen: "https://i.ebayimg.com/images/g/n-kAAOSw6uVdOcFg/s-l1600.jpg",
    },

    {
        category: 'monitores',
        id: '15',
        stock: 119,
        nombre: 'Zowie Benq 144hz',
        precio: '$143.579,99',
        popularidad: '9,8 | 10,00',
        imagen: "https://http2.mlstatic.com/D_NQ_NP_958535-MLA28584703944_112018-O.jpg",
    },

    {
        category: 'monitores',
        id: '14',
        stock: 110,
        nombre: 'Zowie Benq 240hz',
        precio: '$205.199,99',
        popularidad: '9,6 | 10,00',
        imagen: "https://mexx-img-2019.s3.amazonaws.com/monitor-gamer-zowie_41448_5.jpeg",
    },

]

export const traerProductos = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = productos.filter(
            (producto) => producto.category === categoryId 
        );
            
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(productos);
        }, 2000);
    });
};

export default productos