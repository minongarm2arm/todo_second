import React from "react";
import { TodoList } from "../pages/TodoList";
import { Detail } from "../detail/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />}></Route>
        <Route path="detail" element={<Detail />}></Route>
        <Route path="detail/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
