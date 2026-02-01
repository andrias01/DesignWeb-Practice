import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page';
import { DragonballPage } from './pages/dragonball-page/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-super/dragonball-super';
import { GifsPage } from './pages/gifs-page/gifs-page';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent
    },
    {
        path: 'hero',
        component: HeroPageComponent
    },
    {
        path: 'dragonball',
        component: DragonballPage
    },
    {
        path: 'dragonball-super',
        component: DragonballSuperPage
    },
    {
        path: 'gifs',
        component: GifsPage
    },
    {
        path: 'dashboard-page',
        loadComponent: () => import('./components/gifs/pages/dashboard-page/dashboard-page'),
        children: [

            {
                path: 'search-page',
                loadComponent: () => import('./components/gifs/pages/search-page/search-page'),
            },
            {
                path: 'trending-page',
                loadComponent: () => import('./components/gifs/pages/trending-page/trending-page'),
            },
            {
                path: 'history-page/:query',
                loadComponent: () => import('./components/gifs/pages/gif-history/gif-history'),
            },
            {
                path: '**',
                redirectTo: 'trending-page'
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
