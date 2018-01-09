export type Todo = {
    id: number;
    title: string;
    description?: string;
    status: boolean;
  };

  export type TodoList = Todo[];