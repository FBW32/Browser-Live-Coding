import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";

export default function Records(props) {
  const { records, setRecords, token, userData, cart, setCart } = useContext(
    MyContext
  );


  useEffect(() => {
    fetch("/record/api/records", {
      method: "GET",
      headers: { "x-auth": token },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setRecords(result.allRecords);
        } else {
          console.log(result.message);
        }
      })
      .catch((err) => console.log(err));
  }, []); //component did mount (execute once)

  const handleDelete = (id) => {
    fetch(`/api/records/${id}`, {
      method: "DELETE",
      headers: {
        "x-auth": token,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          let updatedRecords = records.filter(
            (record) => record._id !== result.recordDeleted._id
          );
          setRecords(updatedRecords);
        } else {
          console.log(result.message);
        }
      });
  };

  const addToCart = (item) => {
    let copyCart = [...cart, item];
    /*  copyCart.push(item) */
    setCart(copyCart);
  };

  return (
    <div>
      <h1>This is Records Page</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {records.map((record) => {
          return (
            <div
              key={record._id}
              style={{
                width: "300px",
                padding: "10px",
                textAlign: "center",
                boxShadow: "2px 5px 5px gray",
              }}
            >
              <h3>Title: {record.title}</h3>
              <h4>Artist: {record.artist}</h4>
              <p>Year: {record.year}</p>
              <p>Price: {record.price}$</p>
              {userData.role === "Admin" ? (
                <>
                  <button onClick={() => handleDelete(record._id)}>
                    Delete Record
                  </button>{" "}
                  <button>Edit Record</button>{" "}
                </>
              ) : (
                <button onClick={() => addToCart(record)} disabled={cart.includes(record)}>{cart.includes(record)?"Added":"Add to Cart" } </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

