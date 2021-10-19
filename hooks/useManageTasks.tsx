import { api } from "../services/api";
import { useMutation, useQuery } from "react-query";
import { Tasks } from '../types/index';

type CreateTaskInfo = Omit<Tasks, "idTask" | "taskDate" | "status">;

type EditTaskInfo = Omit<Tasks, "taskDate" | "status">;

export const GET_TASKS_KEY = "getTasksKey";
export const GET_TASKS_PRIORITY_KEY = "getTasksKey";

export const getTasks = async () => {
  const { data } = await api.get<Tasks[]>("/Todo");
  return data;
};

export const useGetTasks = () => {
  return useQuery([GET_TASKS_KEY], () => getTasks());
};

const getTasksByPriority = async () => {
  const { data } = await api.get<Tasks[]>("/Todo");
  return data;
};

export const useGetTasksByPriority = () => {
  return useQuery(GET_TASKS_PRIORITY_KEY, () => getTasksByPriority());
};

const createTask = async (info: CreateTaskInfo) => {
  const { data } = await api.post<Tasks[]>("/Todo", info);
  return data;
};

export const useCreateTask = () => {
  return useMutation(createTask);
};

const changeTaskStatus = async (id: number) => {
  const { data } = await api.get(`/Todo/status/${id}`);
  return data;
};

export const useChangeTaskStatus = () => {
  return useMutation(changeTaskStatus);
};

const deleteTask = async (id: number) => {
  const { data } = await api.delete(`/Todo/${id}`);
  return data;
};

export const useDeleteTask = () => {
  return useMutation(deleteTask);
};
