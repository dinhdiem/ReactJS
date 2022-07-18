import "./App.css";
import LayoutHome from "./components/Layout/home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutAdmin from "./components/Layout/admin";
import PhoneList from "./components/PhoneList";
import AddPhone from "./components/AddPhone";
import { useState, useEffect } from "react";
import {
  createPhone,
  deletePhone,
  listPhone,
  updatePhone,
} from "./api/Product";
import { PhoneType } from "./types/ProductType";
import { CategorType } from "./types/CategoryType";
import { listCategors } from "./api/Category";
import EditPhone from "./components/EditPhone";

function App() {
  const [phone, setPhone] = useState<PhoneType[]>([]);
  const [categor, setCategor] = useState<CategorType[]>([]);

  useEffect(() => {
    const getAll = async () => {
      const { data } = await listCategors();
      console.log(data);
      setCategor(data);
    };
    getAll();
  }, []);
  useEffect(() => {
    const getAll = async () => {
      const { data } = await listPhone();
      setPhone(data);
    };
    getAll();
  }, []);

  const handlerEditPhone = async (phone: any) => {
    const { data } = await updatePhone(phone);
    setPhone(
      phone.map((item: PhoneType) => (item.id === data.id ? data : item))
    );
  };

  const handlerDelete = (id: number) => {
    deletePhone(id);
    setPhone(phone.filter((item) => item.id !== id));
  };

  const handlerAddPhone = (data: PhoneType) => {
    createPhone(data);
    setPhone([...phone, data]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHome />} />
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Navigate to="phone"></Navigate>} />
          <Route path="phone">
            <Route
              index
              element={
                <PhoneList
                  phone={phone}
                  ondelete={handlerDelete}
                  categors={categor}
                />
              }
            />
            <Route
              path="add"
              element={<AddPhone onAdd={handlerAddPhone} categors={categor} />}
            />
            <Route
              path=":id/edit"
              element={
                <EditPhone onUpdate={handlerEditPhone} categors={categor} />
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
