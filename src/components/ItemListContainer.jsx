import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "Holds");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProductos(docs);
    });
  }, []);

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
