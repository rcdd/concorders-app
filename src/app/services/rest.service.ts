import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

export class OrderFillableFields {
    request: RequestItemFillableFields[];
    total: number;
    isClosed: boolean;
}

export class RequestItemFillableFields {
    id: number;
    menuItem: MenuFillableFields;
    amount: number;
}

export class MenuTypeFillableFields {
    id: number;
    name: string;
    menu: MenuFillableFields;
    icon: string;
}

export class MenuFillableFields {
    id: number;
    name: string;
    price: string;
    type: MenuTypeFillableFields;
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

    getMenuTypes(): any {
        return this.http.get(this.baseUrl + '/get-menu-types');
    }
}
