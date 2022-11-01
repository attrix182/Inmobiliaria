import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sb-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent implements OnInit {
  @Input() link:string;

  constructor() { }

  ngOnInit(): void {
    this.link = 'https://wa.me/11?text=Hola'
  }

}
