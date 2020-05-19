import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }
  updateName() {
    this.name.setValue('Demo');
  }

}
