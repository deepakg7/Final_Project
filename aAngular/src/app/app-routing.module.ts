import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property/property.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { FeaturedPropertyComponent } from './featured-property/featured-property.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ProprtyMainComponent } from './proprty-main/proprty-main.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { RentComponent } from './rent/rent.component';
import { AgentComponent } from './agent/agent.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AddCarouselComponent } from './add-carousel/add-carousel.component';
import { AddHighlightPropertyComponent } from './add-highlight-property/add-highlight-property.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteAgentComponent } from './delete-agent/delete-agent.component';
import { UpdatePropertyComponent } from './update-property/update-property.component';
import { DeletePropertyComponent } from './delete-property/delete-property.component';
import { UpdateAgentComponent } from './update-agent/update-agent.component';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { ViewCatalogueComponent } from './view-catalogue/view-catalogue.component';
import { ViewConsultationComponent } from './view-consultation/view-consultation.component';
import { ViewSlotsComponent } from './view-slots/view-slots.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AgentPortalComponent } from './agent-portal/agent-portal.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { CrouselComponent } from './crousel/crousel.component';
import { AllagentComponent } from './allagent/allagent.component';
import { FilterComponent } from './filter/filter.component';
import { ScheduleTourComponent } from './schedule-tour/schedule-tour.component';

const routes: Routes = [
  { path:"", redirectTo:'home', pathMatch: 'full' },
  { path:'header',component:HeaderComponent},
  { path:'home', component: HomeComponent },
  { path:'property', component: PropertyComponent},
  { path:'aboutus', component: AboutUsComponent },
  { path:'login', component: LoginComponent },
  { path:'home', component: HomeComponent },
  { path:'featured-property', component: FeaturedPropertyComponent},
  { path:'proprty-main/:id', component: ProprtyMainComponent},
  { path:'footer', component: FooterComponent },
  { path:'contact', component: ContactComponent },
  { path:'signup', component: SignupComponent },
  { path:'forgotpass', component: ForgotpassComponent },
  { path:'rent', component: RentComponent },
  { path:'consultant',component:ConsultantComponent},
  { path:'carousel', component:CrouselComponent},
  { path:'all-agent',component:AllagentComponent},
  { path:'featured',component:FeaturedPropertyComponent},
  { path:'filter', component:FilterComponent},
  { path:'schedule-tour',component:ScheduleTourComponent},
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'add-agent', component: AddAgentComponent },
      { path: 'add-carousel', component: AddCarouselComponent },
      { path: 'add-highlight-property', component: AddHighlightPropertyComponent },
      { path: 'add-property', component: AddPropertyComponent },
      { path: 'delete-agent', component: DeleteAgentComponent },
      { path: 'update-property', component: UpdatePropertyComponent },
      { path: 'delete-property', component: DeletePropertyComponent },
      { path: 'update-agent', component: UpdateAgentComponent },
      { path: 'view-agent', component: ViewAgentComponent },
      { path: 'view-catalogue', component: ViewCatalogueComponent },
      { path: 'view-consultation', component: ViewConsultationComponent },
      { path: 'view-slots', component: ViewSlotsComponent }
    ]
  },
  { path:'admin-login',component:LoginAdminComponent},
  { path:'agent',component:AgentComponent},
  { path:'agent-portal', component:AgentPortalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
