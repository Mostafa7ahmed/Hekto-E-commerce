import { Component, OnInit } from '@angular/core';
import { IResponseOf } from '../../Core/Interface/iproduct-res';
import { IProducts } from '../../Core/Interface/iproducts';
import { ProductsService } from '../../Core/Service/products.service';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-slider-tv',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule , CommonModule],
  templateUrl: './slider-tv.component.html',
  styleUrl: './slider-tv.component.scss'
})
export class SliderTvComponent implements OnInit {



  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductsService) {}

  products: IResponseOf<IProducts[]> = {} as IResponseOf<IProducts[]>;

  ngOnInit() {
    this.productService.getProductCategory("tv").subscribe((res: IResponseOf<IProducts[]>) => {
      this.products.products = res.products.splice(0,8);
    });
  
    this.responsiveOptions = [
      { breakpoint: '1400px', numVisible: 4, numScroll: 1 },
      { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
      { breakpoint: '767px', numVisible: 2, numScroll: 1 },
      { breakpoint: '575px', numVisible: 1, numScroll: 1 }
    ];
  }
  


}
