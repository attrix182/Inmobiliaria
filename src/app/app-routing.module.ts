import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then((m) => m.PublicModule) },
  { path: 'admin', loadChildren: () => import('./private/private.module').then((m) => m.PrivateModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
