import { Component, OnInit, Output } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { RestService } from '../../services/rest.service';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    @Output() tablesList = [];

    constructor(private router: Router, public utils: UtilsService, private storage: Storage, private restService: RestService) {
    }

    async ngOnInit() {
        await this.utils.showLoading();
        this.storage.get('concorders-config').then(async val => {
            const config = JSON.parse(val);
            if (!config || !config.ip || config.ip.trim() === '' || !config.port || config.port.trim() === '') {
                await this.utils.hideLoading();
                this.router.navigate(['/config']);
                return;
            }

            this.loadingData();

            await this.utils.hideLoading();
        });
    }

    async loadingData() {
        await this.restService.getTables().subscribe(data => {
            this.tablesList = data;
        }, error => {
            console.error(error);
        });
        await this.restService.getMenus().subscribe(menus => {
            this.utils.menus = menus;
        }, error => {
            console.error(error);
        });
    }

    presentModal(table) {
        this.utils.currentTable = table;
        this.router.navigate(['/table-selection']);
    }

    async updateTables(event) {
        await this.loadingData();
        event.target.complete();
    }
}
