import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  toggleTodo(i: number) {
    this.getAll();
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todoService.saveTodo(todo).subscribe(value1 => {
        console.log(value1);
        this.content.reset();
        this.getAll();
      });
    }
  }

  getAll() {
    this.todoService.getAll().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(value => {
      this.getAll();
    });
  }
}
