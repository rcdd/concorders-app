import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { map } from 'rxjs/operators';
import { log } from 'util';

// Typescript custom enum for search types (optional)
export enum SearchType {
    all = '',
    movie = 'movie',
    series = 'series',
    episode = 'episode'
}

export class OrderFillableFields {
    request: RequestItemFillableFields[];
    total: number;
    isClosed: boolean;
}

export class RequestItemFillableFields {
    name: string;
    amount: number;
    price: number;
}

@Injectable({
    providedIn: 'root'
})
export class RestService {
    baseUrl;

    /**
     * Constructor of the Service with Dependency Injection
     * @param http The standard Angular HttpClient to make requests
     * @param storage The standard Angular Storage to use DB
     */
    constructor(private http: HttpClient, private storage: Storage) {
        this.updateConfig();
    }

    updateConfig() {
        this.storage.get('concorders-config').then(val => {
            if (val) {
                const json = JSON.parse(val);
                this.baseUrl = 'http://' + json.ip + ':' + json.port + '/api';
            }
        });
    }

    getTables(): any {
        return this.http.get(this.baseUrl + '/get-tables');
    }

    getPlaces(tableId: number): any {
        return this.http.get(this.baseUrl + '/get-places/' + tableId);
    }

    getMenus(): any {
        return this.http.get(this.baseUrl + '/get-menus');
    }

    getActiveOrder(placeId: number): any {
        return this.http.get(this.baseUrl + '/get-order/' + placeId);
    }

    newOrder(placeId: number, order: OrderFillableFields): any {
        return this.http.post(this.baseUrl + '/new-order', {placeId, order});
    }

    updateOrder(orderId: number, requests: RequestItemFillableFields[]): any {
        return this.http.post(this.baseUrl + '/update-order', {orderId, requests});
    }

}
