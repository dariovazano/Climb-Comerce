import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();

  const [productos, setProductos] = useState([1]);
  console.log(productos);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "Holds");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setProductos(docs);
    });
  }, []);

  console.log(productos);

  // const productos = [
  //   {
  //     id: 1,
  //     nombre: "Producto A",
  //     descripcion: "descripcion de produceto A",
  //     stock: 4,
  //     category: "AVA VOLUMES",
  //   },
  //   {
  //     id: 2,
  //     nombre: "Producto B",
  //     descripcion: "descripcion de produceto B",
  //     stock: 7,
  //     category: "INOHOLDS",
  //   },
  //   {
  //     id: 3,
  //     nombre: "Producto C",
  //     descripcion: "descripcion de produceto C",
  //     stock: 67,
  //     category: "KAI CLIMB",
  //   },
  //   {
  //     id: 4,
  //     nombre: "Producto D",
  //     descripcion: "descripcion de produceto D",
  //     stock: 4,
  //     category: "AVA VOLUMES",
  //   },
  //   {
  //     id: 5,
  //     nombre: "Producto E",
  //     descripcion: "descripcion de produceto E",
  //     stock: 7,
  //     category: "INOHOLDS",
  //   },
  //   {
  //     id: 6,
  //     nombre: "Producto F",
  //     descripcion: "descripcion de produceto F",
  //     stock: 67,
  //     category: "KAI CLIMB",
  //   },
  // ];

  // const getProductos = new Promise((resolve, reject) => {
  //   if (productos.length > 0) {
  //     setTimeout(() => {
  //       resolve(productos);
  //     }, 5000);
  //   } else {
  //     reject(new Error("No hay datos"));
  //   }
  // });

  // getProductos
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  const filteredProductos = productos.filter(
    (producto) => producto.categoria === category
  );
  return category == "true" ? (
    <div>
      <ItemList productos={productos} />
    </div>
  ) : (
    <div>
      <ItemList productos={filteredProductos} />
    </div>
  );
};

export default ItemListContainer;
