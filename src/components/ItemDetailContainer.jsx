import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { category } = useParams();

  //     const productos = [
  // {id: 1, nombre: "Producto A", descripcion: "descripcion de produceto A", stock: 4, category: "AVA VOLUMES"  },
  // {id: 2, nombre: "Producto B", descripcion: "descripcion de produceto B", stock: 7, category: "INOHOLDS" },
  // {id: 3, nombre: "Producto C", descripcion: "descripcion de produceto C", stock: 67, category: "KAI CLIMB" },
  // {id: 4, nombre: "Producto D", descripcion: "descripcion de produceto D", stock: 4, category: "AVA VOLUMES"  },
  // {id: 5, nombre: "Producto E", descripcion: "descripcion de produceto E", stock: 7, category: "INOHOLDS" },
  // {id: 6, nombre: "Producto F", descripcion: "descripcion de produceto F", stock: 67, category: "KAI CLIMB" }
  // ]

  // const getProductos = new Promise ((resolve, reject) =>{
  //     if (productos.length >0){
  //     setTimeout(()=>{
  //       resolve(productos)
  //     },5000)
  //     }else {
  //         reject(new Error ("No hay datos"))
  //     }
  //   })

  // getProductos
  // .then((res)=>{
  //     console.log(res)
  // })
  // .catch((error)=>{
  //     console.log(error)
  // })

  return <ItemDetail />;
};

export default ItemDetailContainer;
