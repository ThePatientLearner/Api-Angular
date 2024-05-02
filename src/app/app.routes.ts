import { Routes } from '@angular/router';
import { PortadaComponent } from './componentes/portada/portada.component';
import { ErrorComponent } from './componentes/error/error.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { CafesMundoComponent } from './componentes/cafes-mundo/cafes-mundo.component';

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
        path: "cafeterias",
        component: CafesMundoComponent
    },
    
    {
        path: "sobre_nosotros",
        component:SobreNosotrosComponent
    },

   
    {
        path:"**",
        component: ErrorComponent
    }


];
