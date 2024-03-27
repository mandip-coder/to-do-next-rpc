import { toDoList } from "@/Utils/Mongodb";
import { ObjectId } from "mongodb";

export const config = { rpc: true };

export async function getTodoList() {
  const data = await toDoList();
  const result = data.find({}).toArray();
  return result;
}

export async function addTodo(item) {
  const data = await toDoList();
  const result = data.insertOne(item);
  return result;
}
export async function deleteTodo(id) {
  const data = await toDoList();
  const result = data.deleteOne({ _id: new ObjectId(id) });
  return result;
}
