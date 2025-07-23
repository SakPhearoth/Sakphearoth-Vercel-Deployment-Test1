import { TodoType } from "@/types/todoType";
import React, { use } from "react";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function TodoComponent({
  todos,
}: {
  todos: Promise<TodoType[]>;
}) {
  const allTodos = use(todos);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div>
            <h1 className="text-gray-800 font-bold text-2xl uppercase">
              To-Do List
            </h1>
          </div>
          <form className="w-full md:w-1/2">
            <div className="flex items-center border-b-2 border-teal-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Add a task"
              />
              <Button className="bg-teal-500 text-white hover:bg-teal-600 focus:outline-none">
                Add
              </Button>
            </div>
          </form>
        </div>

        <ul className="divide-y divide-gray-200">
          {allTodos.map((todo) => (
            <li key={todo.id} className="py-4">
              <div className="flex items-center">
                <input
                  id={`todo-${todo.id}`}
                  name={`todo-${todo.id}`}
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label
                  htmlFor={`todo-${todo.id}`}
                  className="ml-3 text-gray-900 flex justify-between w-full items-center"
                >
                  <span className="text-lg font-medium">{todo.todo}</span>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>Due on 4/1/23</span>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Trash className="text-red-500 cursor-pointer" />
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you sure you want to delete this task?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this task.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction className="bg-red-500">
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
