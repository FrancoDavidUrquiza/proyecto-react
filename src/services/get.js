
const data = [
    {
      id: 1,
      image:
        "https://3.bp.blogspot.com/-UoRFPSKXm2M/VEOTEznPGVI/AAAAAAAABSk/0LHdYlhheaY/s1600/img1413714407476.jpg",
      title: "Gorro a Crochet",
      descripcion: "este es el primer producto",
      category: "Productos",
      price: "3500",
      stock: "4",
    },
    {
      id: 2,
      image: "https://www.handworkdiy.com/wp-content/uploads/2020/10/crochet-scarf.png",
      title: "Bufanda a Crochet",
      descripcion: "este es el segundo producto",
      category: "Productos",
      price: "5200",
      stock: "10",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/originals/8c/43/b4/8c43b48d32062f2ec1e65e277eb923cc.jpg",
      title: "Buzo a Crochet",
      descripcion: "este es el tercero producto",
      category: "Productos",
      price: "12000",
      stock: "5",
    },
    
    
  ]; 

  const getData = new Promise ((resolve) =>{
    setTimeout(()=>{
      resolve(data);

    },2000);
  } );

  export default getData;