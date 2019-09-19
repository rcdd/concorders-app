import { Component, Output } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { UtilsService } from '../../services/utils.service';
import { RestService } from '../../services/rest.service';

@Component({
    templateUrl: 'table-selection.page.html',
    styleUrls: ['./table-selection.page.scss'],
    selector: 'table-selection-page',
})

export class TableSelectionPage {
    @Output() placesInUse = [];
    @Output() placesNotInUse = [];

    constructor(private nav: NavController, private utils: UtilsService,
                private actionSheetController: ActionSheetController,
                private restService: RestService) {
    }

    async ionViewWillEnter() {
        if (!this.utils.currentTable) {
            this.navBack();
            return;
        }
        await this.utils.showLoading();
        this.placesInUse = [];
        this.placesNotInUse = [];
        this.restService.getPlaces(this.utils.currentTable.id).subscribe(async resp => {
            await resp.forEach(place => {
                if (place.inUse) {
                    this.placesInUse.push(place);
                } else {
                    this.placesNotInUse.push(place);
                }
            });
            await this.utils.hideLoading();
        });
    }

    navBack() {
        this.nav.navigateBack('home', {animated: true, animationDirection: 'back'});
    }

    async openTable(opt) {
        this.utils.currentOrder = {};
        let table;

        await this.utils.showLoading();
        await this.restService.getActiveOrder(opt.id).subscribe(async order => {
            table = order;
            if (!table) {
                opt.newOrder = true;
                table = opt;
            }
            table.name = opt.name;
            table.peopleCount = opt.peopleCount;

            this.utils.currentOrder = table;
            if (!this.utils.currentOrder.request) {
                this.utils.currentOrder.request = [];
            }

            await this.utils.hideLoading();
            this.nav.navigateForward('order', {animated: true, animationDirection: 'forward'});
        });
    }

    async newTable() {
        const listTables = [];
        this.placesNotInUse.forEach(place => {
            listTables.push({
                id: place.id,
                text: place.name,
                icon: 'today',
                handler: () => {
                    this.openTable(place);
                }
            });
        });

        const actionSheet = await this.actionSheetController.create({
            header: 'Escolha o lugar da mesa',
            buttons: listTables.length !== 0 ? listTables : [{
                id: -1,
                text: 'Sem mais lugares',
                icon: 'close'
            }]
        });
        await actionSheet.present();
    }
}
