const stockProductos = [
    
    //Mothers
    
    {id: 1, nombre: "Asus Prime Z590A", desc: "Motherboard Asus Prime Z590A", precio: 1200, Categoria: "Mother", img: '/img/mother6.jpg'},
    {id: 2, nombre: "MSI A520M-A Pro", desc: "Motherboard MSI A520M-A Pro", precio: 1100, Categoria: "Mother", img: '/img/mother5.jpg'},
    {id: 3, nombre: "Asus Prime B560M-A", desc: "Motherboard Asus Prime B560M-A", precio: 1200, Categoria: "Mother", img: '/img/mother4.jpg'},
    {id: 4, nombre: "ROG Strix B550-F", desc: "Motherboard ROG Strix B550-F Gaming", precio: 1400, Categoria: "Mother", img: '/img/mother3.jpg'},
    {id: 5, nombre: "Aorus Z590I Ultra", desc: "Motherboard Aorus Z590I Ultra", precio: 1200, Categoria: "Mother", img: '/img/mother2.jpg'},
    {id: 6, nombre: "Aorus B550 Elite AX V2", desc: "Motherboard Aorus B550 Elite AX V2", precio: 1500, Categoria: "Mother", img: '/img/mother1.jpg'},

    //CPUS
    
    {id: 7, nombre: "Ryzen 5 3600X", desc: "AMD Ryzen 5 3600X", precio: 500, Categoria: "CPU", img: '/img/cpu6.jpg'},
    {id: 8, nombre: "Ryzen 7 3700X", desc: "AMD Ryzen 7 3700X", precio: 500, Categoria: "CPU", img: '/img/cpu5.jpg'},
    {id: 9, nombre: "Ryzen 9 3900X", desc: "AMD Ryzen 9 3900X", precio: 500, Categoria: "CPU", img: '/img/cpu4.jpg'},
    {id: 10, nombre: "Intel Core i3-10100F", desc: "Intel Core i3-10100F", precio: 700, Categoria: "CPU", img: '/img/cpu3.jpg'},
    {id: 11, nombre: "Intel Core i9-9900K", desc: "Intel Core i9-9900K", precio: 700, Categoria: "CPU", img: '/img/cpu2.jpg'},
    {id: 12, nombre: "Intel Core i7-9700F", desc: "Intel Core i7-9700F", precio: 700, Categoria: "CPU", img: '/img/cpu1.jpg'},
    
    //GPUS
    
    {id: 13, nombre: "GeForce RTX 3090", desc: "Nvidia GeForce RTX 3090", precio: 900, Categoria: "GPU", img: '/img/gpu1.jpg'},
    {id: 14, nombre: "Radeon RX 6900X", desc: "AMD Radeon RX 6900X", precio: 1400, Categoria: "GPU", img: '/img/gpu6.jpg'},
    {id: 15, nombre: "Radeon RX 6500XT", desc: "AMD Radeon RX 6500XT", precio: 7000, Categoria: "GPU", img: '/img/gpu5.jpg'},
    {id: 16, nombre: "GeForce RTX 2060", desc: "Nvidia GeForce RTX 2060", precio: 777, Categoria: "GPU", img: '/img/gpu4.jpg'},
    {id: 17, nombre: "GeForce RTX 3050", desc: "Nvidia GeForce RTX 3050", precio: 234, Categoria: "GPU", img: '/img/gpu3.jpg'},
    {id: 18, nombre: "GeForce RTX 2080TI", desc: "Nvidia GeForce RTX 2080TI", precio: 1600, Categoria: "GPU", img: '/img/gpu2.jpg'},
    
    //Gabinetes
    
    {id: 19, nombre: "Gabinete gamer 1", desc: "Gabinete gamer", precio: 1600, Categoria: "Gabinete", img: '/img/gabinete1.jpg'},
    {id: 20, nombre: "Gabinete gamer 2", desc: "Gabinete gamer", precio: 3200, Categoria: "Gabinete", img: '/img/gabinete2.jpg'},
    {id: 21, nombre: "Gabinete gamer 3", desc: "Gabinete gamer", precio: 2300, Categoria: "Gabinete", img: '/img/gabinete3.jpg'},
    {id: 22, nombre: "Gabinete gamer 4", desc: "Gabinete gamer", precio: 5600, Categoria: "Gabinete", img: '/img/gabinete4.jpg'},
    {id: 23, nombre: "Gabinete gamer 5", desc: "Gabinete gamer", precio: 1700, Categoria: "Gabinete", img: '/img/gabinete5.jpg'},
    {id: 24, nombre: "Gabinete gamer 6", desc: "Gabinete gamer", precio: 800, Categoria: "Gabinete", img: '/img/gabinete6.jpg'},
]

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

    for (const nombre of stockProductos) {
        guardarLocal(nombre.id, JSON.stringify(stockProductos));
    }

guardarLocal('listaStock', JSON.stringify(stockProductos))

