import { Routes } from '@angular/router';
import { BlankLayout } from './layout/blank-layout/blank-layout';
import { MainLayout } from './layout/main-layout/main-layout';
import { LandingPage } from './pages/landing-page/landing-page';
import { Login } from './login/login';
import { Register } from './register/register';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { Table } from './pages/table/table';
export const routes: Routes = [
  {
    path: '',
    component: BlankLayout,
    children: [
      { 
        path: '', component: LandingPage 
    },
      { 
        path: 'login', component: Login 
    },
      { path: 'register', component: Register },
    ],
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'home',
        component: Home,
        children: [
          { path: 'profile', component: Profile },
        ],
      },
    ],
  },
  {
    path: '',
    component: Table,
    children: [{
      path: 'table', component: Table
    }]
  },
  {
    path: '',
    component: Home,
    children: [{path: 'home', component: Home}]
  },
    { path: '**', redirectTo: '' },
];
