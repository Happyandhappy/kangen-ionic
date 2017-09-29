var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppSettings } from '../../app/appSettings';
import 'rxjs/add/operator/map';
/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
    */
var ProductServiceProvider = (function () {
    function ProductServiceProvider(http) {
        this.http = http;
        this.apiUrl = AppSettings.API_ENDPOINT + 'api/product/';
        this.baseURL = AppSettings.API_ENDPOINT;
        console.log('Hello ProductServiceProvider Provider');
    }
    //get Category details starts
    ProductServiceProvider.prototype.GetCategoryDetails = function () {
        var headers = new Headers();
        headers.append("Access-Control-Allow-Origin", '*');
        headers.append("Access-Control-Allow-Methods", 'POST, GET');
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new RequestOptions({ headers: headers });
        var post_params = {};
        var link = this.apiUrl + "get-all-products";
        return this.http.post(link, post_params, options)
            .map(function (res) { return res.json(); });
    };
    return ProductServiceProvider;
}());
ProductServiceProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ProductServiceProvider);
export { ProductServiceProvider };
//# sourceMappingURL=product-service.js.map