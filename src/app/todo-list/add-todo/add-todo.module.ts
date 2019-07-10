import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { AddTodoPresentationComponent } from './add-todo-presentation/add-todo-presentation.component';
import { AddTodoComponent } from './add-todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [FormsModule, CommonModule, SharedModule,BrowserAnimationsModule],
  declarations: [AddTodoComponent, AddTodoPresentationComponent],
  exports: [AddTodoComponent]
})
export class AddTodoModule {}
