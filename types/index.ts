export type Views = "todo" | "done" | "priority" | "date" | "search";

export interface Tasks {
  idTask: number;
  taskName: string;
  task: string;
  taskDate: string;
  deadLine: string;
  priority: number;
  status: boolean;
}
