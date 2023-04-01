// import React, { useEffect, useState } from "react";
// import { IProduct } from "../models/products";

// export function useFetchProducts() {
//   const [products, setProducts] = useState<IProduct[]>([]);
//   const [loading, setLoading] = useState<Boolean>(false);
//   const [error, setError] = useState("")

//   async function fetchProducts() {
//     try {
//       setLoading(true);
//       setError("")
//       const response = await fetch("https://dummyjson.com/products?limit=100");
//       const data = await response.json();
//       if (data && data.products) {
//         setProducts(data.products);
//       }
//       setLoading(false);
//     } catch (error: unknown) {
//         setLoading(false);
//         setError('There was an error')
//         console.log('error while fetching products', error);
//     }
//   }

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return { products, loading, error };
// }


