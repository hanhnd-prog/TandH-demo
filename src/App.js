import React, { useState } from "react";

import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

import Footer from "./Footer"

const allCategories = ["Tất cả", ...new Set(data.product.map((item) => item.category))];
//console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(data.product);
  const [category, setCategory] = useState(allCategories);

  //console.log(menuItems);
  const filterItems = (cate) => {
    if (cate === "Tất cả") {
      setMenuItems(data.product);
      return;
    }

    const filter = data.product.filter(item=> item.category === cate);
    setMenuItems(filter);
  };

  const [fooTer, setFooTer] = useState(data.footerInfo)

  return (
    <main>
      <div className="title">
        <h2>Cửa hàng cây cảnh T&H</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} category={category} />
      <Menu menuItems={menuItems} />
      
      <Footer fooTer={fooTer} width = "400" height = "300" />
    </main>
  );
}

export default App;
