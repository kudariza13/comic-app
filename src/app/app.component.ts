import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'comic-app';
  public cards:Array<any> =[]
  ngOnInit(): void {
    this.cards=[
      {
        title:'woodpecker',
        link: 'https://imgs.xkcd.com/comics/snack.png',
        img:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png'
      },
      {
        title:'woodpecker',
        link: 'https://imgs.xkcd.com/comics/snack.png',
        img:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png'
      },
      {
        title:'woodpecker',
        link: 'https://imgs.xkcd.com/comics/snack.png',
        img:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png'
      },
      {
        title:'woodpecker',
        link: 'https://imgs.xkcd.com/comics/snack.png',
        img:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png'
      }
    ]
  }

}
