import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    HttpClientModule,
    MatMenuModule,
    NgxJsonViewerModule,
    FormlyModule.forRoot({})
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {}
