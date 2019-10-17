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
                await this.gotoConfig();
                return;
            }

            this.loadingData().catch(async () => {
                await this.gotoConfig(true);
            }).finally(async () => {
                await this.utils.hideLoading();
            });
        });
    }

    async loadingData() {
        return new Promise((resolve, reject) => {
            this.restService.getTables().subscribe(data => {
                this.tablesList = data;
                this.restService.getMenus().subscribe(menus => {
                    this.utils.menus = menus;
                    this.restService.getMenuTypes().subscribe(menuTypes => {
                        this.utils.menuTypes = menuTypes;
                        resolve();
                    }, error => {
                        reject();
                        console.error(error);
                    });
                }, error => {
                    reject();
                    console.error(error);
                });
            }, error => {
                console.error(error);
                reject();
            });
        });

    }

    async presentModal(table) {
        this.utils.currentTable = table;
        await this.router.navigate(['/table-selection']);
    }

    async updateTables(event) {
        await this.loadingData().catch(async () => {
            await this.gotoConfig(true);
        }).finally(() => {
            event.target.complete();
        });
    }

    async gotoConfig(error: boolean = false) {
        if (error) {
            alert('Ups! Ocorreu um problema ao ligar ao servidor! Verifique ligação e/ou configurações');
        }
        await this.router.navigate(['/config']);
    }
}
