import express from "express";
import dotenv from "dotenv";
import React from 'react'

const testing = () => {
  return (
    <div>testing</div>
dotenv.config();

const app = express();

app.get("/products ", (req, res) => {});

console.log(process.env.MongoDB_Connect);

app.listhen(3000, () => {
  console.log("Server is running on port 3000");
});

}

export default testing