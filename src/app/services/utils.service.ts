import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    menus;
    currentTable;
    currentOrder;
    loading;
    menuTypes;

    constructor(public loadingController: LoadingController) {
    }

    public async showLoading(text?: string) {
        this.loading = await this.loadingController.create({
            message: text || 'Loading...',
            spinner: 'crescent',
        });
        await this.loading.present();
    }

    public async hideLoading() {
        await this.loading.dismiss();
    }

}
