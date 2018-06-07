import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('title') childtitle:string="Default title";
  @Input('items') things:string[]=["thing1", "thin2", "thing3"];
  style:string="style1";
  item:string;
  @Output('send') emitter:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  } 

  changeColor() {
    this.style = this.style == 'style1' ? 'style2' : 'style1';
  }

  sendToParent() {
    this.emitter.emit(this.item);
  }

}
