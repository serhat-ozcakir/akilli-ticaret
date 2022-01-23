import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const CommerceContext = createContext();
function CommerceContextProvider({ children }) {
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [filteredCategory, setfilteredCategory] = useState([]);

  console.log(item);

 
  useEffect(() => {
    const getItem = async () => {
      const items = await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => res.data);
      setItem(items);
    };
    getItem();
    const getCategory = async () => {
      const categoryItem = await axios
        .get("https://fakestoreapi.com/products/categories")
        .then((res) => res.data);
      setCategory(categoryItem);
    };
    getCategory();
  }, []);

  const changeCategory = (categoryName) => {
    setfilteredCategory(item.filter((item) => item.category === categoryName));
    // console.log(item.filter((item)=>item.category===categoryName));
  };
  const values = { item, category, changeCategory, filteredCategory };
  return (
    <CommerceContext.Provider value={values}>
      {children}
    </CommerceContext.Provider>
  );
}
export default CommerceContextProvider;
