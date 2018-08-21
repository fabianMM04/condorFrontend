import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import { SearchComponent } from './components/search/search.component'
import { VideoComponent } from './components/video/video.component';

const appRoutes: Routes=[
    {path:'', component:SearchComponent },
    {path:'video/:id', component:VideoComponent },

    {path:'', redirectTo:'', pathMatch:'full'},

    {path: '**', component:SearchComponent},
    
    ];
    
    export const appRoutingProviders: any[] = [];
    export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);