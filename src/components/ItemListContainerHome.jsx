import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainerHome = () => {
  /////////////////////////////////////Logica para obtener los datos de la base de datos FireBase
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "Holds");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProductos(docs);
    });
  }, []);

  ///////////////////////////////////aqui renderizo pero si la categoria trae un valor true es que el usuario quiere ver todos los productos de lo contrario muestro la categoria que viene en el parametro.
  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainerHome;
