import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../shared/interface/todo';
import { TodoService } from './service/todo.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule,ReactiveFormsModule],
  providers: [
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'todo';
  todos: Todo[] = [];
  form:FormGroup=new FormGroup({
    id:new FormControl(''),
    task:new FormControl('')
  })
  isEdit: boolean=false;
  constructor(private _todoService: TodoService) { }
  ngOnInit(): void {
    this.getTodoList()
  }
  getTodoList() {
    this._todoService.getAllTodos().subscribe((x:any) => {
      if(x.length>0){
        this.todos=x
      }
    })
  }
  newTodo: string = '';

  addTodo(): void {
    if(!this.isEdit){
      if(this.form.valid){
       this._todoService.createTodo(this.form.value).subscribe(res=>{
         if(res){
           this.form.reset()
           this.getTodoList()
         }
       })
      }
    } else{
      this._todoService.updateTodo(this.form.value).subscribe(res=>{
          this.isEdit=false
          this.form.reset()
          this.getTodoList()
      })
    }
  }

  updateTodo(item:Todo){
    this.isEdit=true
    this.form.patchValue(item)

  }
  removeTodo(todo: Todo) {
    this._todoService.deleteTodo(todo.id).subscribe(res=>{
      this.getTodoList()
  })
  }
}
