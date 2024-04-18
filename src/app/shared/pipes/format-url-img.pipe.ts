import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatUrlImg',
  standalone: true
})
export class FormatUrlImgPipe implements PipeTransform {

  transform(urlImg:string): string {

    const url="https://interstate21.com/tesla-app/images/"+urlImg+".jpg"
    return url;
  }

}
