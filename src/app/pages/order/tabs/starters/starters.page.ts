import { Component, OnInit, Output } from '@angular/core';
import { UtilsService } from '../../../../services/utils.service';

@Component({
    selector: 'app-starters',
    templateUrl: './starters.page.html',
    styleUrls: ['./starters.page.scss'],
})
export class StartersPage implements OnInit {
    @Output() menu = [];

    constructor(public utils: UtilsService) {
    }

    ngOnInit() {
        this.menu = this.utils.menus.filter(menu => menu.type === 'starters');
    }
}
