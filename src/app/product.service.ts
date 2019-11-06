import { Injectable } from '@angular/core';

import {Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {


  private_albumUrl = '../assets/album.json';
  _albumUrl;
  constructor(private _http: Http) { }


  getAlbum(id: number) {

  return this._http.get(this._albumUrl).map((reponse) => reponse.json());
  
  }
  

}
