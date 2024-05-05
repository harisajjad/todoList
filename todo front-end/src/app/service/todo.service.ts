import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL, END_POINTS } from '../../shared/const';
import { Todo } from '../../shared/interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getAllTodos(){
    return this.http.get(BASE_URL+END_POINTS.getTodo)
  }
  createTodo(data:Todo){
    return this.http.post(BASE_URL+END_POINTS.createTodo,data)
  }
  updateTodo(data:Todo){
    return this.http.put(BASE_URL+END_POINTS.updateTodo+'/'+data.id,data)
  }
  deleteTodo(id:string){
    return this.http.delete(BASE_URL+END_POINTS.updateTodo+'/'+id)
  }
}
