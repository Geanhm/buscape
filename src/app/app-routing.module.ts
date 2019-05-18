import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: '', component: HomeComponent },
	{ path: '**', component: NotFoundComponent }
]	

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
