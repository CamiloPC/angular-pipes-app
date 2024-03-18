import { Component } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';


@Component({
  selector: 'app-gifs',
  standalone: true,
  imports: [HomePageComponent],
  templateUrl: './gifs.component.html',
})
export class GifsComponent {

}
