import { CategorType } from "../types/CategoryType";
import instance from "./instance";

export const listCategors = () => {
  const url = `/categors`;
  return instance.get(url);
};

export const createCategory = (data: CategorType) => {
  const url = `/categors`;
  return instance.post(url, data);
};

export const deleteCategory = (id: number) => {
  const url = `/categors/${id}`;
  return instance.delete(url);
};
