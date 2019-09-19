import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)},
    {path: 'order', loadChildren: () => import('./pages/order/order.module').then(m => m.OrderPageModule)},
    {
        path: 'table-selection',
        loadChildren: () => import('./pages/table-selection/table-selection.module').then(m => m.TableSelectionPageModule)
    },
    {path: 'config', loadChildren: () => import('./pages/config/config.module').then(m => m.ConfigPageModule)},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
