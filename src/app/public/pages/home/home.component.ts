import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isVisible = true;

  constructor() {}

  ngOnInit(): void {}
}
