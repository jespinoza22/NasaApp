import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NasaApp';

  selectMenu(){
    const menu = document.querySelector('.menu-header');
    if (menu.classList.contains('NUEVA')){
      menu.classList.remove('NUEVA');
    }else {
      menu.classList.add('NUEVA');
    }

    console.log(menu);
  }
}
