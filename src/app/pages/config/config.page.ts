import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RestService } from '../../services/rest.service';


@Component({
    selector: 'app-config',
    templateUrl: './config.page.html',
    styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
    public errorMessage: string;
    public config: { ip: string, port: string } = {ip: '', port: ''};

    static validateIP(ipaddress) {
        // tslint:disable-next-line
        return (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress));
    }

    constructor(private navCtrl: NavController, private storage: Storage, private restService: RestService) {
    }

    async ngOnInit() {
        this.storage.get('concorders-config').then(val => {
            if (val) {
                Object.assign(this.config, JSON.parse(val));
            }
        });
    }

    async saveConfig() {
        this.errorMessage = '';
        if (!ConfigPage.validateIP(this.config.ip)) {
            this.errorMessage = 'Insira um IP válido!';
            return;
        }

        this.config.port = this.config.port.toString();
        if (!this.config.port || this.config.port.trim() === ''
            || !(Number(this.config.port) > 0 && Number(this.config.port) < 65536)) {
            this.errorMessage = 'Insira um porto válido!';
            return;
        }

        await this.storage.set('concorders-config', JSON.stringify(this.config));
        this.restService.updateConfig();
        this.goBack();
    }

    goBack() {
        this.navCtrl.navigateBack('/home');
    }

}
