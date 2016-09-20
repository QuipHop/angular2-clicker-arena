import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'disposable'
})
export class DisposablePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        let ret = value.filter((i) => i.disposable? i : false);
        return ret;
    }

}
