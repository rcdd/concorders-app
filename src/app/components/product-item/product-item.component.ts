import { Component, Input, OnInit, Output } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { MenuFillableFields, RequestItemFillableFields } from '../../services/rest.service';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
    @Input() item: MenuFillableFields;
    @Output() privateItem: RequestItemFillableFields;

    constructor(private utils: UtilsService) {
    }

    ngOnInit() {
        let item: RequestItemFillableFields = this.getItem();

        if (!item) {
            item = new RequestItemFillableFields();
            item.menuItem = JSON.parse(JSON.stringify(this.item));
            item.amount = 0;
        }
        this.privateItem = item;
    }

    getItem() {
        return this.utils.currentOrder.request.find(item => item.menuItem.name === this.item.name);
    }

    addProduct() {
        const item = this.getItem();
        if (item) {
            item.amount++;
        } else {
            this.privateItem.amount++;
            this.utils.currentOrder.request.push(this.privateItem);
        }
    }

    removeProduct() {
        if (this.privateItem.amount === 0) {
            return;
        }
        const item = this.getItem();
        if (!item) {
            return;
        }
        this.privateItem.amount--;
    }
}
