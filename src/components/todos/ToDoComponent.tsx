import { TodoType } from '@/types/todoType';
import React, { use } from 'react';

export default function TodoComponent({ todos }: { todos: Promise<TodoType[]> }) {
  const allTodos = use(todos);

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl overflow-hidden mt-10 mb-6 transition-all duration-300 hover:shadow-2xl">
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-teal-500 to-teal-600">
        <h1 className="text-white font-bold text-2xl tracking-tight">To-Do List</h1>
      </div>

      {/* Form */}
      <form className="w-full max-w-sm mx-auto px-6 py-4">
        <div className="flex items-center border-b-2 border-teal-300 py-2 transition-all duration-200 focus-within:border-teal-500">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-800 text-sm py-2 px-3 leading-tight focus:outline-none placeholder-gray-400"
            type="text"
            placeholder="Add a new task..."
            aria-label="Add a task"
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 hover:shadow-md"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>

      {/* Todo List */}
      <ul className="divide-y divide-gray-100 px-6 pb-4">
        {allTodos.map((todo) => (
          <li
            key={todo.id}
            className="py-4 flex items-center group hover:bg-gray-50 transition-colors duration-150"
          >
            <input
              id={`todo-${todo.id}`}
              name={`todo-${todo.id}`}
              type="checkbox"
              defaultChecked={todo.completed}
              className="h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded cursor-pointer transition-colors duration-200"
            />
            <label
              htmlFor={`todo-${todo.id}`}
              className="ml-3 flex-1 flex flex-col cursor-pointer"
            >
              <span
                className={`text-base font-medium text-gray-900 ${
                  todo.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {todo.todo}
              </span>
              <span className="text-xs font-light text-gray-500 mt-1">
                Due on 4/1/23
              </span>
            </label>
            <button
              className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-600 text-sm font-medium transition-opacity duration-200"
              aria-label={`Delete ${todo.todo}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}