import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit() {

  }

  items = ["item1"];
  itemsCount = this.items.length;
  addClicked = false;
  addItem() {
    this.addClicked = true;
  }

  toggleAddClicked() {
    if(this.addClicked) this.addClicked = false;
    else this.addClicked = true;
  }

}
