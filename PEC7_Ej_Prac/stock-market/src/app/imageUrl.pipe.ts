import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'imageUrl'
})
export class imageUrlPipe implements PipeTransform {
 
    transform(value: any) {
        if(value === '')
            return 'assets/images/NoImage.jpg';
        else
            return value;
    }
    
}