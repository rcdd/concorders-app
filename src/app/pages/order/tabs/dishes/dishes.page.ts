import { Component, OnInit, Output } from '@angular/core';
import { UtilsService } from '../../../../services/utils.service';

@Component({
    selector: 'app-dishes',
    templateUrl: './dishes.page.html',
    styleUrls: ['./dishes.page.scss'],
})
export class DishesPage implements OnInit {
    @Output() menu = [];

    constructor(public utils: UtilsService) {
    }

    ngOnInit() {
        this.menu = this.utils.menus.filter(menu => menu.type === 'dishes');
    }
}
