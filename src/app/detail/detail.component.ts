import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  todo: Todo;
  title: string;

  constructor() { }

  ngOnInit(): void {
    this.todo = JSON.parse(localStorage.getItem('todo'));
  }

}
