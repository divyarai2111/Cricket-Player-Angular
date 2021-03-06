import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FavServiceService } from './Services/fav-service.service';
import { UserService } from './userservice.service';
import { PlayerService } from './Services/player.service';
import { CommonModule } from '@angular/common';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { MatDialogModule  } from '@angular/material/dialog';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
import { FavoritePlayersComponent } from './favorite-players/favorite-players.component'
import { BreadcrumbModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { TableFilterPipe } from './upcoming-matches/table-filter.pipe';
import { FilterPipe } from './upcoming-matches/filter-unique.pipe';
// import { DummyComponent } from './dummy/dummy.component';
import { CommonDialogComponent } from './common-dialog/common-dialog.component';
import { IgxIconModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  MatListModule} from '@angular/material/list';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
 
@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SideNavigationComponent,
    LoginComponent,
    RegisterComponent,
    CourseDialogComponent,
    FilterPipe,
    UpcomingMatchesComponent,
    TableFilterPipe,
    FavoritePlayersComponent,
    
    CommonDialogComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatAutocompleteModule,
    MatDialogModule,
    MDBBootstrapModule.forRoot(),
    MatExpansionModule,
    MatTableModule,
    IgxNavigationDrawerModule,
    IgxIconModule,
    HammerModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    
    
    




  ],
  providers: [FavServiceService, UserService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
