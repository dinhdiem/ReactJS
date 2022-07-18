import { PhoneType } from "../types/ProductType";
import instance from "./instance";

export const listPhone = () => {
  const url = `/phones`;
  return instance.get(url);
};

export const readPhone = (id: any) => {
  const url = `/phones/${id}`;
  return instance.get(url);
};

export const createPhone = (data: PhoneType) => {
  const url = `/phones`;
  return instance.post(url, data);
};

export const updatePhone = (data: PhoneType) => {
  const url = `/phones/${data.id}`;
  return instance.put(url, data);
};

export const deletePhone = (id: number) => {
  const url = `/phones/${id}`;
  return instance.delete(url);
};
