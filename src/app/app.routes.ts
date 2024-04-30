import { Routes } from '@angular/router';
import { PortadaComponent } from './componentes/portada/portada.component';
import { ErrorComponent } from './componentes/error/error.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';

export const routes: Routes = [

    {
        path: "",
    component: LoginComponent
    },
    {
        path: "index",
    component: PortadaComponent  
    },
    
   
    {
        path:"**",
        component: ErrorComponent
    }


];
