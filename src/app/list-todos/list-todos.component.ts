import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe]

})
export class ListTodosComponent  implements OnInit {

  message = '';
  todos = [
    { id: 1, description: "TODO1", done: false, targetDate: new Date()},
    { id: 2, description: "TODO2", done: false, targetDate: new Date()},
    { id: 3, description: "TODO3", done: false, targetDate: new Date()}
  ];

  constructor() {}

  ngOnInit() {
   
  }

  updateTodo(id: number) {

  }

  deleteTodo(id: number) {


    
  }

  addTodo() {

  }
}
