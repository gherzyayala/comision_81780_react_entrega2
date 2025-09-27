const products = [
  {
    id: 1,
    title: "Laptop Pro 15",
    price: 1200,
    imgURL: "/products/laptop.jpg",
    stock: 10,
    category: "Electronics",
    description: "Laptop potente con procesador de última generación y pantalla de 15 pulgadas."
  },
  {
    id: 2,
    title: "Smartphone X",
    price: 899,
    imgURL: "/products/smartphone.jpg",
    stock: 30,
    category: "Electronics",
    description: "Smartphone con cámara avanzada y batería de larga duración."
  },
  {
    id: 3,
    title: "Auriculares Inalámbricos",
    price: 150,
    imgURL: "https://example.com/img/auriculares.jpg",
    stock: 50,
    category: "Accessories",
    description: "Auriculares con cancelación de ruido y excelente calidad de sonido."
  },
  {
    id: 4,
    title: "Tablet Mini 8",
    price: 400,
    imgURL: "https://example.com/img/tablet-mini-8.jpg",
    stock: 15,
    category: "Electronics",
    description: "Tablet compacta con pantalla de 8 pulgadas y sistema operativo moderno."
  },
  {
    id: 5,
    title: "Monitor UltraWide 34",
    price: 750,
    imgURL: "https://example.com/img/monitor-ultrawide.jpg",
    stock: 8,
    category: "Electronics",
    description: "Monitor panorámico de 34 pulgadas ideal para multitarea."
  },
  {
    id: 6,
    title: "Mochila Antirrobo",
    price: 60,
    imgURL: "https://example.com/img/mochila.jpg",
    stock: 40,
    category: "Accessories",
    description: "Mochila resistente con puerto USB y diseño antirrobo."
  },
  {
    id: 7,
    title: "Teclado Mecánico RGB",
    price: 120,
    imgURL: "https://example.com/img/teclado.jpg",
    stock: 30,
    category: "Accessories",
    description: "Teclado mecánico retroiluminado con switches de alta calidad."
  },
  {
    id: 8,
    title: "Mouse Gamer Pro",
    price: 80,
    imgURL: "https://example.com/img/mouse.jpg",
    stock: 45,
    category: "Accessories",
    description: "Mouse gamer ergonómico con 7 botones programables."
  },
  {
    id: 9,
    title: "Cámara Reflex 24MP",
    price: 1100,
    imgURL: "https://example.com/img/camara.jpg",
    stock: 12,
    category: "Electronics",
    description: "Cámara digital profesional con lentes intercambiables."
  },
  {
    id: 10,
    title: "Smartwatch Fit",
    price: 200,
    imgURL: "https://example.com/img/smartwatch.jpg",
    stock: 35,
    category: "Electronics",
    description: "Reloj inteligente con monitoreo de actividad física y notificaciones."
  },
  {
    id: 11,
    title: "Parlante Bluetooth",
    price: 90,
    imgURL: "https://example.com/img/parlante.jpg",
    stock: 60,
    category: "Accessories",
    description: "Altavoz portátil con sonido envolvente y resistente al agua."
  },
  {
    id: 12,
    title: "Cafetera Automática",
    price: 300,
    imgURL: "https://example.com/img/cafetera.jpg",
    stock: 20,
    category: "Home",
    description: "Cafetera programable con espumador de leche integrado."
  },
  {
    id: 13,
    title: "Silla Ergonómica",
    price: 250,
    imgURL: "https://example.com/img/silla.jpg",
    stock: 18,
    category: "Home",
    description: "Silla de oficina ergonómica con soporte lumbar ajustable."
  },
  {
    id: 14,
    title: "Disco Duro Externo 2TB",
    price: 110,
    imgURL: "https://example.com/img/disco-duro.jpg",
    stock: 70,
    category: "Electronics",
    description: "Disco duro portátil con alta velocidad de transferencia."
  },
  {
    id: 15,
    title: "Memoria USB 128GB",
    price: 30,
    imgURL: "https://example.com/img/usb.jpg",
    stock: 100,
    category: "Accessories",
    description: "Memoria USB de gran capacidad y tamaño compacto."
  },
  {
    id: 16,
    title: "Impresora Multifuncional",
    price: 220,
    imgURL: "https://example.com/img/impresora.jpg",
    stock: 14,
    category: "Home",
    description: "Impresora con función de escáner y fotocopiadora."
  },
  {
    id: 17,
    title: "Televisor 55 pulgadas 4K",
    price: 850,
    imgURL: "https://example.com/img/tv.jpg",
    stock: 9,
    category: "Electronics",
    description: "Televisor inteligente con resolución 4K y HDR."
  },
  {
    id: 18,
    title: "Router WiFi 6",
    price: 130,
    imgURL: "https://example.com/img/router.jpg",
    stock: 25,
    category: "Electronics",
    description: "Router de última generación con mayor cobertura y velocidad."
  },
  {
    id: 19,
    title: "Plancha de Ropa a Vapor",
    price: 70,
    imgURL: "https://example.com/img/plancha.jpg",
    stock: 50,
    category: "Home",
    description: "Plancha de vapor con función anti goteo y apagado automático."
  },
  {
    id: 20,
    title: "Lámpara de Escritorio LED",
    price: 45,
    imgURL: "https://example.com/img/lampara.jpg",
    stock: 75,
    category: "Home",
    description: "Lámpara regulable con luz cálida y fría."
  },
  {
    id: 21,
    title: "Zapatillas Running Pro",
    price: 140,
    imgURL: "https://example.com/img/zapatillas.jpg",
    stock: 22,
    category: "Clothing",
    description: "Zapatillas ligeras y transpirables para correr largas distancias."
  },
  {
    id: 22,
    title: "Chaqueta Impermeable",
    price: 95,
    imgURL: "https://example.com/img/chaqueta.jpg",
    stock: 30,
    category: "Clothing",
    description: "Chaqueta resistente al agua y al viento, ideal para exteriores."
  },
  {
    id: 23,
    title: "Reloj Clásico",
    price: 180,
    imgURL: "https://example.com/img/reloj.jpg",
    stock: 15,
    category: "Accessories",
    description: "Reloj elegante con correa de cuero y diseño clásico."
  },
  {
    id: 24,
    title: "Gafas de Sol Polarizadas",
    price: 70,
    imgURL: "https://example.com/img/gafas.jpg",
    stock: 45,
    category: "Accessories",
    description: "Gafas de sol con protección UV y lentes polarizados."
  },
  {
    id: 25,
    title: "Camiseta Deportiva",
    price: 35,
    imgURL: "https://example.com/img/camiseta.jpg",
    stock: 80,
    category: "Clothing",
    description: "Camiseta transpirable ideal para actividades deportivas."
  },
  {
    id: 26,
    title: "Pantalón Casual",
    price: 60,
    imgURL: "https://example.com/img/pantalon.jpg",
    stock: 50,
    category: "Clothing",
    description: "Pantalón cómodo de algodón para uso diario."
  },
  {
    id: 27,
    title: "Bicicleta de Montaña",
    price: 900,
    imgURL: "https://example.com/img/bicicleta.jpg",
    stock: 10,
    category: "Sports",
    description: "Bicicleta resistente para rutas de montaña y caminos difíciles."
  },
  {
    id: 28,
    title: "Balón de Fútbol",
    price: 40,
    imgURL: "https://example.com/img/balon.jpg",
    stock: 60,
    category: "Sports",
    description: "Balón oficial con diseño moderno y materiales duraderos."
  },
  {
    id: 29,
    title: "Guantes de Boxeo",
    price: 75,
    imgURL: "https://example.com/img/guantes.jpg",
    stock: 25,
    category: "Sports",
    description: "Guantes acolchados ideales para entrenamiento y competición."
  },
  {
    id: 30,
    title: "Colchoneta de Yoga",
    price: 50,
    imgURL: "https://example.com/img/yoga.jpg",
    stock: 100,
    category: "Sports",
    description: "Colchoneta antideslizante y cómoda para yoga o pilates."
  }
];

export default products;