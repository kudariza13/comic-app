import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante:any;
  // public image!: string;
  constructor() { }

  ngOnInit(): void {
    // this.image = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png'
    // console.log(this.dataEntrante);
  }

}
