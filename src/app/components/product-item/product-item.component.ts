import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
    @Input() item;

    constructor(private utils: UtilsService) {
    }

    ngOnInit() {
        this.item = this.getItem() || JSON.parse(JSON.stringify(this.item));
        if (!this.item.amount) {
            this.item.amount = 0;
        }
    }

    getItem() {
        return this.utils.currentOrder.request.find(item => item.name === this.item.name);
    }

    addProduct() {
        const item = this.getItem();
        if (item) {
            item.amount++;
        } else {
            this.item.amount++;
            this.utils.currentOrder.request.push(this.item);
        }
    }

    removeProduct() {
        if (this.item.amount === 0) {
            return;
        }
        const item = this.getItem();
        if (!item) {
            return;
        }
        this.item.amount--;
        if (this.item.amount === 0) {
            const index = this.utils.currentOrder.request.findIndex(it => it.id === this.item.id);
            if (index > -1) {
                this.utils.currentOrder.request.splice(index, 1);
            }
        }
    }
}
