type Product = {
    id : number
    name: string;
    price: number;
    type: string;
    imagen: string;
};
  
export const products: Product[] = [
    {
      id : 1,
      name: "Mouse gamer",
      price: 10.99,
      type: "mouse",
      
      imagen: "../../img/mouse.png"
      // description : "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos."

    },
    {
      id : 2,
      name: "Teclado",
      price: 19.99,
      type: "keyboard",
      imagen: "../../img/teclado.png"
    },
    {
      id : 3,
      name: "ps4",
      price: 300.99,
      type: "ps4",
      imagen: "../../img/ps4.png"
    },
    {
      id : 4,
      name: "lexma G88",
      price: 500,
      type: "Lexma",
      imagen: "../../img/vision_2.png"
    },
    {
      id : 5,
      name: "mando play 2",
      price: 10,
      type: "play 2",
      imagen: "../../img/mandoplay.png"
    },
    {
      id : 6,
      name: "nintendo",
      price: 500,
      type: "nintendo",
      imagen: "../../img/nintendo.png"
    },
    {
      id : 7,
      name: "portatil",
      price: 700,
      type: "portatil",
      imagen: "../../img/portatil.png"
    },
    {
      id : 8,
      name: "audífonos",
      price: 700,
      type: "audífonos",
      imagen: "../../img/audifonos.png"
    },
   
  ];
  

  