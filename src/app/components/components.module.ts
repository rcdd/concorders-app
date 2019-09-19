import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
    declarations: [
        ProductItemComponent
    ],
    exports: [
        ProductItemComponent
    ],
    imports: [
        IonicModule
    ]
})
export class ComponentsModule {
}
