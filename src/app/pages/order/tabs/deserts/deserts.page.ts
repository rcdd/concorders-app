import { Component, OnInit, Output } from '@angular/core';
import { UtilsService } from '../../../../services/utils.service';

@Component({
    selector: 'app-dishes',
    templateUrl: './deserts.page.html',
    styleUrls: ['./deserts.page.scss'],
})
export class DesertsPage implements OnInit {
    @Output() menu = [];

    constructor(public utils: UtilsService) {
    }

    ngOnInit() {
        this.menu = this.utils.menus.filter(menu => menu.type === 'deserts');
    }
}
