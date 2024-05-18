import { handleDeleteMethod, handleGetMethod, handlePostMethod, handlePutMethod } from "../../api/methods";

export function ListContacts() {
  return handleGetMethod("/users");
}

export function DetailsContacts(id) {
  return handleGetMethod(`/users/${id}/edit`);
}

export function CreateContacts(data) {
  return handlePostMethod(`/users`, data);
}

export function EditContacts(id, data) {
  return handlePutMethod(`/users/${id}`, data);
}

export function DeleteContacts(id) {
  return handleDeleteMethod(`/users/${id}`);
}

