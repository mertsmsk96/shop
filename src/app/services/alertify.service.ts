import { Injectable } from '@angular/core';

declare let alertify:any;

// servisler bizim sürekli kullancağımız operasyonları tek bir yerde yazıp kolayca her yerde kullanabilmemizi sağlar.

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(mesaj:string){
    alertify.success(mesaj)
  }

  error(mesaj:string){
    alertify.error(mesaj);
    
  }
}
