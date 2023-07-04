const misProductos = [
    {id:"1", nombre:"Velador",precio: 15500,img:"", idCat: "2"},
    {id:"2", nombre:"Lampara",precio: 12500,img:"", idCat: "2"},
    {id:"3", nombre:"Lampara de exterior",precio: 10500,img:"", idCat: "3"},
    {id:"4", nombre:"Lampara de Pie",precio: 21500,img:"", idCat: "3"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( ()=> {
            resolve(misProductos);
        }, 100)

    })
} 

export const getUnProducto = (id) => {
    return new Promise(resolve =>{
        setTimeout (() => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);

        },100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout (() => {
            const productosCategoria = misProductos.filter(prod=> prod.idCat === idCategoria);
            resolve(productosCategoria);

        },100)
    })
}

