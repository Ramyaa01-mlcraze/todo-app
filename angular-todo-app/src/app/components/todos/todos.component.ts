import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/Todo";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => (this.todos = todos));
  }

  // adds the todo in the list
  addTodo(todo:Todo)
  {
    this.todoService.addTodo(todo).subscribe(todos => (this.todos.push(todo)));
  }

  // deletes the selected todo from ui and db
  deleteTodo(todo:Todo)
  {
    this.todos = this.todos.filter(t=> t.id != todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }
}
