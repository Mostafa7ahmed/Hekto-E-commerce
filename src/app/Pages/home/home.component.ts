import { Component } from '@angular/core';
import { BannerComponent } from '../../Components/banner/banner.component';
import { SliderTvComponent } from '../../Components/slider-tv/slider-tv.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent , SliderTvComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
