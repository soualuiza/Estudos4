import { BindingeventModule } from './bindingevent/bindingevent.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { BindingeventComponent } from './bindingevent/bindingevent.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    EventbindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
