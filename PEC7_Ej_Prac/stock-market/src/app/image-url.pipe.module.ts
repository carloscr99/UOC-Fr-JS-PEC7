import { NgModule } from '@angular/core';
import { imageUrlPipe } from './imageUrl.pipe';

@NgModule({
  declarations: [imageUrlPipe],
  exports: [imageUrlPipe]
})
export class ImageUrlPipeModule { }
