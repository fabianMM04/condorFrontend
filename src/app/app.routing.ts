import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import {SearchComponent} from './search/search.component'
const appRoutes: Routes=[
    {path:'', component:SearchComponent },
    {path:'', redirectTo:'', pathMatch:'full'},
    {path: '**', component:SearchComponent},
    
    ];
    
    export const appRoutingProviders: any[] = [];
    export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);