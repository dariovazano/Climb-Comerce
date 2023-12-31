import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  /////////////////////////////////////Logica de parametrizacion
  const { category } = useParams();
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

  ////////////////////////////////////////////////////filtro por la categoria que me trae la parametrizacion
  const filteredProductos = productos.filter(
    (producto) => producto.categoria === category
  );

  ///////////////////////////////////aqui renderizo pero si la categoria trae un valor true es que el usuario quiere ver todos los productos de lo contrario muestro la categoria que viene en el parametro.
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
