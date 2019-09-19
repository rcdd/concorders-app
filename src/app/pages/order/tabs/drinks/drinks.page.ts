import { Component, OnInit, Output } from '@angular/core';
import { UtilsService } from '../../../../services/utils.service';

@Component({
    selector: 'app-dishes',
    templateUrl: './drinks.page.html',
    styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {
    @Output() menu = [];

    constructor(public utils: UtilsService) {
    }

    ngOnInit() {
        this.menu = this.utils.menus.filter(menu => menu.type === 'drinks');
    }
}
