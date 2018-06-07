import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  childtitles: string[]=["Vegetables", "Fruits", "Spices","Stationaries"];
  items: string[][] = [
    ["Onion", "Potato","Tomato","Brinjal","Chilli"],
    ["Apple","Banana","Cherry","Grapes", "Mango"],
    ["Cardamom", "Cinnamon", "Cloves", "Pepper"],
    ["Pen", "Paper", "Book"]
  ]

  handleChildData (data, childcount) {
    this.items[childcount].push(data);
  }
}
