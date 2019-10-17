import { Component, OnInit, Output } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { NavController } from '@ionic/angular';
import { MenuFillableFields, RestService } from '../../services/rest.service';

@Component({
    selector: 'app-order',
    templateUrl: 'order.page.html',
    styleUrls: ['order.page.scss'],
})
export class OrderPage implements OnInit {
    @Output() menuActive: MenuFillableFields;

    constructor(private nav: NavController, private utils: UtilsService, private restService: RestService) {
    }

    async ngOnInit() {
        if (!this.utils.currentOrder || !this.utils.menuTypes) {
            await this.navBack();
            return;
        }
        this.menuActive = this.utils.menus.filter(menu => menu.type.name === this.utils.menuTypes[0].name);
    }

    async navBack() {
        await this.nav.navigateBack('table-selection', {animated: true, animationDirection: 'back'});
    }

    segmentChanged(evt) {
        this.menuActive = this.utils.menus.filter(menu => menu.type.name === evt.detail.value);
    }

    async sendOrder() {
        await this.utils.showLoading();
        if (this.utils.currentOrder.newOrder) {
            await this.newOrder();
        } else {
            await this.updateOrder();
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
        // console.log('updating request', this.utils.currentOrder.request);
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
