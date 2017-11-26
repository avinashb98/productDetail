import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

    fetchedCategories = [''];
    item = {
      name: "",
      category: [''],
      categoryOptional:['AND'],
      quantity: '',
      amount: ''
    }
    itemCount = 1;
    addCategory() {
      this.itemCount++;
      this.item.category.push('category'+this.itemCount);
    }

    constructor(private http: HttpClient) {};

    ngOnInit(): void {

      this.http.get(
        'http://35.154.241.44:5555/api/v1/gspade/data'
      ).subscribe(data=> {
        this.fetchedCategories = data['categories'];
      });
    }

    close(cat: string) {
      this.item.category.splice(this.item.category.indexOf(cat), 1);
    }

}
