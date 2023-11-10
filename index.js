const express = require("express");
const app = express();
require("dotenv").config()
const cors = require("cors");

app.use(cors());

const data = [
  {
    id: 1,
    image: "https://i.ibb.co/6P6SBbs/conitos.jpg",
    title: "CONITOS",
    description:
      "Una deliciosa opción para acompañar las meriendas, ese antojo de media nocheo compartir con amigos",
    ingredientes: [
      "125 g de manteca blanda",
      " 125 g de azúcar impalpable",
      "1 huevo",
      "220 g de harina 0000",
      "500 g de dulce de leche repostero",
      "Chocolate cobertura",
    ],
    Pasos: [
      "Batir la manteca con el azúcar. Agregar el huevo y luego la harina tamizada.",
      "Mezclar sin parar hasta formar la masa. Envolver en film y llevar a heladera por 1 hora.",
      "Estirarla de 5 mm. Cortar 20 círculos de 4 cm y ponerlos en una placa enmantecada. Hornearlos a 175°,  durante 10 o 12 minutos.",
      "Poner el dulce en una manga con boquilla. Trazar el cono de dulce sobre cada base. Enfriar en heladera 15 minutos y fundir el chocolate.",
      "Tomar los bocaditos y sumergirlos en el chocolate.",
      "Bañarlos completamente en una rejilla. Dejar enfriar y mantenerlos a temperatura fresca.",
    ],
    infoNutricional:[{name:"Calorías", valor:74},{name: "Carbohidratos", valor:19},{name:"Proteinas", valor:12} , {name:"Grasas", valor:8}],  
  },
  {
    id: 2,
    image: "https://i.ibb.co/BKVmjgR/pepas.jpg",
    title: "PEPAS",
    description:
      "Las galletitas mas tiernas y ricas, rellenas de dulce membrillo, ideales para el mate y la hora del té",
    ingredientes: [
      "100 g de manteca",
      "100 g de azúcar",
      "1 huevo",
      "240 g de harina 0000",
      "200 g de dulce de membrillo",
      "1 cucharadita de esencia de vainilla",
      "1 cucharadita de polvo de hornear",
    ],
    Pasos: [
      "Mezclar en un bol la manteca, el azúcar, el huevo y la esencia de vainilla. Removemos todo bien hasta obtener una mezcla homogénea.",
      "Agregamos la harina que tendremos que mezclar previamente con el polvo de hornear.",
      "Hacemos porciones y formamos unas bolitas, las dejamos sobre la bandeja del horno previamente enmantecada y enharinada y con el pulgar aplastamos el centro de cada bolita formando un pequeño hueco.",
      "Colocamos 1 cucharadita de dulce de membrillo en el hueco de cada galletita y cuando ya lo tengamos listo, metemos la bandeja en el horno previamente precalentado a una temperatura de 180º C.",
      "Cocinar por unos 10 minutos aproximadamente.",
    ],
    infoNutricional:[{name:"Calorías", valor:65},{name: "Carbohidratos", valor:19},{name:"Proteinas", valor:6} , {name:"Grasas", valor:12}]
  },
  {
    id: 3,
    image: "https://i.ibb.co/9gVSFGp/torta.jpg",
    title: "TORTA DE CHOCOLATE",
    description:
      "La torta de chocolate mas sabrosa del mundo, combina un delicioso bizcochuelo de chocolate y el mas suave dulce de leche",
    ingredientes: [
      "3 tazas de harina",
      "3 tazas de azúcar ",
      "4 huevo",
      "2½ cucharaditas de bicarbonato",
      "1 cucharadita de polvos de hornear",
      "2 cucharadita de esencia de vainilla",
      " 1½ tazas de cocoa o cacao en polvo",
      " 1½ tazas de aceite",
      " 2 tazas de leche (480 mililitros)",
    ],
    Pasos: [
      "Tamiza la harina junto con la cocoa, el bicarbonato y el polvo de hornear. Añade dos tazas de azúcar, la sal y la canela y mezcla bien.",
      "Separa las claras de las yemas de huevo e introduce a la mezcla anterior el aceite y la leche y mezcla bien.",
      "Agrega ahora las yemas de huevo y la esencia de vainilla y continúa mezclando. Aparte, bate las claras a punto de nieve con el azúcar restante e incorpóralas a la mezcla.",
      "Vierte la masa del bizcocho húmedo de chocolate en un molde para horno previamente enharinado y enmantecado y lo hornea a 180 ºC durante 50 minutos.",
      "Retira la torta de chocolate, déjala enfriar a temperatura ambiente y después la desmoldas. Puedes cortar el bizcocho por la mitad y rellenarlo con frosting de chocolate.",
    ],
    infoNutricional:[{name:"Calorías", valor:80},{name: "Carbohidratos", valor:60},{name:"Proteinas", valor:16} , {name:"Grasas", valor:30}]
  },
  {
    id: 4,
    image: "https://i.ibb.co/Lx5KJwb/Trufas.jpg",
    title: "TRUFAS",
    description:
      "Las clásicas trufas de dulce de leche y galletas de chocolate semiamargo a las que es imposible resistirse",
    ingredientes: [
      "1 paquete y 1/2 de galletitas Chocolinas",
      "400 g dulce de leche",
      "200 g coco rallado",
      "OPCIONAL: Licor",
    ],
    Pasos: [
      "Triturar las chocolinas en la procesadora o aplastarlas adentro de una bolsa hasta hacerlas un polvo.",
      "Mezclar muy bien el dulce de leche con el polvo de galletitas y la mitad del coco rallado. (Agregar el licor si se desea)",
      "Formar bolitas del tamaño que nos guste y pasarlas por el coco rallado restante. Guardalas en la heladera hasta el momento de consumir.",
    ],
    infoNutricional:[{name:"Calorías", valor:64},{name: "Carbohidratos", valor:18},{name:"Proteinas", valor:5} , {name:"Grasas", valor:9}]
  },
  {
    id: 5,
    image: "https://i.ibb.co/GpZ5VR7/budin.png",
    title: "BUDIN",
    description:
      "Budin de chocolate, super esponjoso y exquisito. El compañero perfecto de una buena merienda.",
    ingredientes: [
      "175 g harina 0000",
      "150 g de azúcar ",
      "2 huevo",
      "60 ml aceite",
      "125 ml leche",
      "1 cdta polvo de hornear",
      "35 g cacao",
      "Azúcar impalpable(opcional)",
    ],
    Pasos: [
      "Batir el aceite con el azúcar y agregar los huevos de a uno, mezclando bien en cada agregado, que quede una mezcla con burbujas.",
      "Incorporar la mitad de los secos tamizados (harina, cacao y el polvo de hornear) e integrar bien, luego agregar la mitad de la leche.",
      "Repetir el paso con el resto de los secos y la leche, pero esta vez sin batir.",
      "Colocar la preparación en un molde para budín y llevar al horno unos 50 minutos aproximadamente.",
      "Dejar enfriar, desmoldar y decorar a gusto.",
    ],
    infoNutricional:[{name:"Calorías", valor:55},{name: "Carbohidratos", valor:29},{name:"Proteinas", valor:16} , {name:"Grasas", valor:12}]
  },
  {
    id: 6,
    image: "https://i.ibb.co/y5kJkYp/chocotorta.jpg",
    title: "CHOCOTORTA",
    description:
      "Una deliciosa torta, elaborada con el mas exquisito dulce de leche ideal para acompañar las merienda",
    ingredientes: [
      "Queso crema 350 g.",
      "Dulce de leche 600 g.",
      "Coco rallado 6cdas",
      "Galletitas de chocolate 1/2 Kg.",
      "Leche 1,5 taza",
      "Esencia de Vainilla 1 cda",
      "Coco rallado (opcional)",
    ],
    Pasos: [
      "Mezclá en un bowl el queso crema, el dulce de leche y el coco rallado hasta integrar y llevá al congelador 15 minutos para que la mezcla se endurezca.",
      "mezclá la leche con la esencia de vainilla Alicante y remojá unos pocos segundos 12 galletitas para que se humedezcan. comienza a colocarlas en la fuente, una al lado de la otra hasta formar una base.",
      "Cubrí la base de galletitas con una capa de 2 cm. de la crema de dulce de leche y coco rallado .",
      "Repetí la base de galletitas humedecidas y la capa de crema hasta formar seis pisos.",
      "Terminá con una capa de la crema y decorá espolvoreando coco rallado.",
    ],
    infoNutricional:[{name:"Calorías", valor:85},{name: "Carbohidratos", valor:48},{name:"Proteinas", valor:7} , {name:"Grasas", valor:26}]
  },{
    id: 7,
    image: "https://i.ibb.co/KG91tjR/panqueques.jpg",
    title: "PANQUEQUES CON DULCE",
    description:
      "Un verdadero clásico dulce, ideal para acompañar tus meriendas.",
    ingredientes: [
      "125 g de harina 0000",
      "250cc. de leche",
      "2 huevos",
      "200 g de dulce de leche repostero",
      "1 pizca de sal",
    ],
    Pasos: [
      "En un bol, colocar los huevos y la leche.",
      "Umar la pizca de sal y la harina de a poco, mientras se bate para que no se formen grumos. .",
      "Dejar reposar en la heladera media hora para que la harina se hidrate.",
      "Calentar un sartén con materia grasa y echar un cucharón de la preparación. Cuando coagule, voltearlo.",
      "Servir con abundante dulce de leche.",
    ],
    infoNutricional:[{name:"Calorías", valor:75},{name: "Carbohidratos", valor:38},{name:"Proteinas", valor:9} , {name:"Grasas", valor:13}]
  },
  {
    id: 8,
    image: "https://i.ibb.co/RgVxWH0/mousse.jpg",
    title: "MOUSSE DE DULCE DE LECHE",
    description:
      "Un delicioso y  muy cremoso mousse, elaborado con el mas esquisito dulce de leche",
    ingredientes: [
      "250 g de dulce de leche",
      "200 ml nata con un 35% de materia grasa",
      "100 ml de claras de huevo",
      "15 g de azúcar o miel",
    ],
    Pasos: [
      "Montar a velocidad media las claras de huevo.",
      "Cuando estén sedimentadas agregar el azúcar o miel.",
      "Continuar montando hasta que adquieran una textura suave.",
      "Mezclar el dulce de leche con la nata montada hasta integrar.",
      "Agregar las claras montadas e integrar con movimientos envolventes.",
      "Llenar unas copas con la mousse de dulce de leche resultante y refrigerar mínimo durante 4 horas.",
    ],
    infoNutricional:[{name:"Calorías", valor:78},{name: "Carbohidratos", valor:40},{name:"Proteinas", valor:8} , {name:"Grasas", valor:15}]
  },
  {
    id: 9,
    image: "https://i.ibb.co/Fq9PXCF/tarta.jpg",
    title: "TARTA DE DULCE DE LECHE",
    description:
      "Una tarta de dulce de leche de versión fría y sin horno con una mousse y una base de galletas deliciosa.",
    ingredientes: [
      "350 g de dulce de leche",
      "400 g de nata para montar",
      "100 g de galletas",  
      "50 g de mantequilla",
      "6 g de gelatina neutra en polvo o 3 hojas de gelatina",
    ],
    Pasos: [
      "Triturar las galletas Y mezclarlas con la mantequilla derretida.",
      "Colocar un círculo de papel de hornear en la base del molde. Cubrir la base del molde con la mezcla de galletas.",
      "Poner en remojo la gelatina.",
      "Calentar 100 g de nata e incorporar poco a poco el dulce de leche.",
      "Calentar la mezcla y, cuando hierva, retirar del fuego, añadir la gelatina, mezclar bien.",
      "Montar el resto de la nata.",
      "Incorporar poco a poco el dulce de leche a la nata.",
      "Transferir la mezcla al molde. Enfriar mínimo 4 horas o de un día para otro.",
      "Desmoldar y decorar al gusto."
    ],
    infoNutricional:[{name:"Calorías", valor:60},{name: "Carbohidratos", valor:40},{name:"Proteinas", valor:24} , {name:"Grasas", valor:19}]
  },
];

app.get("/", (req, res) => {
  res.send(data);
});

const port = process.env.PORT || 3010

app.listen(3000, () => {
  console.log(`Escuchando en puerto ${port}`);
});
