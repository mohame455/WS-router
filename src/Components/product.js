import React from "react";
const Product = (props) => {
  console.log(props);
  return (
    <div>
      <div style={{ display: "block", justifyContent: "space-between" }}>
        <div
          style={{
            float: "right",
            padding: "10px",
            width: "30%",

            marginLeft: "auto",
          }}
        >
          {props.prod
            .filter((el) => el.id === props.match.params.id)
            .map((el) => (
              <div key={el.id}>
                <h3> {el.name} </h3>
                <p>{el.description}</p>

                <h4>{el.status}</h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
