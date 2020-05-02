import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  menuItems = [
    {
      label: 'Item one',
      link: 'javascript: void();'
    },
        {
      label: 'Item two',
      link: 'javascript: void();'
    },
        {
      label: 'Item three',
      link: 'javascript: void();'
    }
  ]

}
