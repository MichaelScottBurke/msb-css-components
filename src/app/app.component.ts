import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  navItems = [
    {
      label: 'Accordions',
      link: 'accordion'
    },
        {
      label: 'App bars',
      link: 'app-bar'
    },
        {
      label: 'Buttons',
      link: 'butto'
    }
  ];


  menuItems = [
    {
      label: 'Item one',
      link: 'javascript: void(0);'
    },
        {
      label: 'Item two',
      link: 'javascript: void(0);'
    },
        {
      label: 'Item three',
      link: 'javascript: void(0);'
    }
  ];

}
