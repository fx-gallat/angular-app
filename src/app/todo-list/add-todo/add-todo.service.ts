import { EventEmitter, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TODOItem } from '@app/shared/models/todo-item';
import { TodoListActions } from '@app/core/todo-list/redux-api/todo-list.actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddTodoService {

  private _currentTODO: TODOItem = new TODOItem('', '');

  public get currentTODO(): TODOItem {
    return this._currentTODO;
  }
  public set currentTODO(value: TODOItem) {
    this._currentTODO = Object.assign({}, value);
  }

  public todoItemEdit = new EventEmitter<TODOItem>();
  public todoItemCreate = new EventEmitter<TODOItem>();

  constructor(private todoListActions: TodoListActions){}

  public save(form: NgForm) {
    if (!form.valid) {
      console.log('Invalid form!');
      // TODO: display form errors
      return;
    }

    const todoToSave = {
      ...this.currentTODO
    };

    this.todoListActions.saveDataBaseTodo(todoToSave);

    if (todoToSave.id) {
      this.todoItemEdit.emit(todoToSave);
      form.resetForm();
    } else {
      this.todoItemCreate.emit(todoToSave);
      form.resetForm();
    }
  }


}
