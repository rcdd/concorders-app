import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { NavController } from '@ionic/angular';
import { RestService } from '../../services/rest.service';

@Component({
    selector: 'app-order',
    templateUrl: 'order.page.html',
    styleUrls: ['order.page.scss'],
})
export class OrderPage implements OnInit {

    constructor(private nav: NavController, private utils: UtilsService, private restService: RestService) {
    }

    ngOnInit() {
        if (!this.utils.currentOrder) {
            this.navBack();
            return;
        }
        // console.log('CurrentOrder', this.utils.currentOrder);
    }

    navBack() {
        this.nav.navigateBack('table-selection', {animated: true, animationDirection: 'back'});
    }

    async sendOrder() {
        this.utils.showLoading();

        if (this.utils.currentOrder.newOrder) {
            this.newOrder();
        } else {
            this.updateOrder();
        }
    }

    async newOrder() {
        await this.restService.newOrder(this.utils.currentOrder.id, this.utils.currentOrder).subscribe(async resp => {
            await this.utils.hideLoading();
            this.utils.currentOrder = {};
            this.nav.navigateBack('home', {animated: true, animationDirection: 'back'});
        }, async error => {
            await this.utils.hideLoading();
            console.error(error);
        });
    }

    async updateOrder() {
        await this.restService.updateOrder(this.utils.currentOrder.id, this.utils.currentOrder.request).subscribe(async resp => {
            await this.utils.hideLoading();
            this.utils.currentOrder = {};
            this.nav.navigateBack('home', {animated: true, animationDirection: 'back'});
        }, async error => {
            await this.utils.hideLoading();
            console.error(error);
        });
    }

}
