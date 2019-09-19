import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DishesPage } from './dishes.page';
import { ComponentsModule } from '../../../../components/components.module';

const routes: Routes = [
    {
        path: '',
        component: DishesPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [DishesPage]
})
export class DishesPageModule {
}
