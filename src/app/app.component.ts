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
    if (menu.classList.contains('menu-responsive')){
      menu.classList.remove('menu-responsive');
    }else {
      menu.classList.add('menu-responsive');
    }
  }
}
