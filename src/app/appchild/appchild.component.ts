import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appchild',
  templateUrl: './appchild.component.html',
  styleUrls: ['./appchild.component.css']
})
export class AppchildComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}