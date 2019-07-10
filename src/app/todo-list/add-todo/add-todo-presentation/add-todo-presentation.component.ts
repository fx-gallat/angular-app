import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TODOItem } from '@app/shared/models/todo-item';

export interface Intent {
  description: string;
}

@Component({
  selector: 'app-add-todo-presentation',
  templateUrl: './add-todo-presentation.component.html',
  styleUrls: ['./add-todo-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoPresentationComponent implements OnInit {

  @Input() public currentTODO: TODOItem;
  @Input() public isLoading = false;
  @Output() public saved = new EventEmitter<NgForm>();

  constructor() { }

    descriptions: Intent[] = [
    {description: 'bot_hobby'},
    {description: 'name_asked'},
    {description: 'disposition_planche_format'}
  ];

  public ngOnInit() {}

  public save(form: NgForm) {
    this.saved.emit(form);

  }

}


