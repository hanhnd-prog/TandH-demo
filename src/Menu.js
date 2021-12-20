import React from "react";

const Menu = ({ menuItems }) => {
  //console.log(menuItems);
  return (
    <div className="section-center">
      {menuItems.map((item) => {
        //console.log(item);
        const { id, title, price, img, desc } = item;
        return (
          <article className="menu-item" key={id}>
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">Giá: {price} VNĐ</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
