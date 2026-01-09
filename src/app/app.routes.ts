import { Routes } from '@angular/router';
import { BlankLayout } from './layout/blank-layout/blank-layout';
import { MainLayout } from './layout/main-layout/main-layout';
import { LandingPage } from './pages/landing-page/landing-page';
import { Login } from './login/login';
import { Register } from './register/register';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
        path: '',
        component: BlankLayout,
        children: [{
            path: '', component: LandingPage,
        }]
  },
  {
        path: '',
        component: Login,
        children: [{
            path: 'login', component: Login
        }]
  },
  {
        path: '',
        component: Register,
        children: [{
            path: 'register', component: Register
        }]
  },
  {
        path: '',
        component: MainLayout,
        children: [{
            path: 'home', component: Home
        }]
  },
  {
        path: '',
        component: MainLayout,
        children: [{
            path: '', component: BlankLayout,
        }]
  },

    { path: '**', redirectTo: '' },
];
