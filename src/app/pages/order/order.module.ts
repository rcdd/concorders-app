import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { OrderPage } from './order.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CommonModule,
        ComponentsModule,
        RouterModule.forChild([
            {
                path: '',
                component: OrderPage,
                children: [
                    {
                        path: 'deserts',
                        loadChildren: () => import('./tabs/deserts/deserts.module').then(m => m.DesertsPageModule)
                    },
                    {
                        path: 'drinks',
                        loadChildren: () => import('./tabs/drinks/drinks.module').then(m => m.DrinksPageModule)
                    },
                    {
                        path: 'dishes',
                        loadChildren: () => import('./tabs/dishes/dishes.module').then(m => m.DishesPageModule)
                    },
                    {
                        path: 'starters',
                        loadChildren: () => import('./tabs/starters/starters.module').then(m => m.StartersPageModule)
                    },
                    {
                        path: '',
                        redirectTo: '/order/starters',
                        pathMatch: 'full'
                    }
                ]
            }
        ])
    ],
    declarations: [OrderPage]
})

export class OrderPageModule {
}
