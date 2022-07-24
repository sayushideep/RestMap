import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { MatMenuModule } from '@angular/material/menu';
import { RestroomListComponent } from './restroom-list/restroom-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import { RestroomDetailsComponent } from './restroom-details/restroom-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ToolbarComponent,
    SearchComponent,
    RestroomListComponent,
    RootComponent,
    RestroomDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
