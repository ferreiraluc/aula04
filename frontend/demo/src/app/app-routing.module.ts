import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/sistema/login/login.component';
import { IndexComponent } from './components/layout/index/index.component';
import { PessoaslistComponent } from './components/pessoas/pessoaslist/pessoaslist.component';
import { ListagemCarrosComponent } from './components/carros/listagem-carros/listagem-carros.component';
import { ListagemLivrosComponent } from './components/livros/listagem-livros/listagem-livros.component';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: IndexComponent, children: [
      { path: "pessoas", component: PessoaslistComponent },
      { path: 'carros', component: ListagemCarrosComponent },
      { path: 'livros', component: ListagemLivrosComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
