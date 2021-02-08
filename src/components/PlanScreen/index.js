import React, { useEffect, useState } from 'react';
import database from '../../firebase/firebase';
import './styles.css';

function PlanScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    database
      .collection('products')
      .where('active', '==', true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
        });

        setProducts(products);
      });
  }, []);

  console.log(products);

  return (
    <div className="planScreen">
      {Object.entries(products).map(([productId, ProductData]) => {
        return (
          <div className="planScreen__plan">
            <div className="planScreen__info">
              <h5>{ProductData.name}</h5>
              <h6>{ProductData.description}</h6>
            </div>
            <button>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
