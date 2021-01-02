import { Link, Route } from "react-router-dom";
import React from "react";
import Product from "./product";

function products(props) {
  const prod = [
    {
      id: '1',
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available",
    },
    {
      id: '2',
      name: "U.S. POLO ASSN. Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Available",
    },
    {
      id: '3',
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available",
    },
    {
      id: '4',
      name: "Lee Cooper Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock",
    },
  ];

  return (
    <>
      <h3>product</h3>

      <div>
        <div style={{ display: "block", justifyContent: "space-between" }}>
          <div
            style={{
              float: "left",
              padding: "10px",
              width: "30%",
              background: "hsla(230,84%,63%,0.5)",
              marginLeft: "auto",
            }}
          >
            {prod.map((el) => (
              <div key={el.id}>
                <Link to={`/products/${el.id}`}>{el.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Route path={"/products/:id"} render={(props)=><Product prod ={prod} {...props}/>}/>
      {console.log(props)}
    </>
  );
}
export default products;
