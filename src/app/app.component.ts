import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Formly Configs
  form: FormGroup;
  model: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];

  // MetaData_Service
  TemplateOptions = {};

  FormlyStructure: {};
  examples = ['simple'];
  fieldList = [];
  constructor(
    private formlyJsonschema: FormlyJsonschema,
    private http: HttpClient
  ) {
    this.loadExample('simple');
  }

  loadTemplateOptions(options: any, optionsValues: any, templateOptions: any) {
    if (optionsValues) {
      templateOptions[options] = optionsValues;
    }
  }
  loadExample(type: string) {
    this.http
      .get<any>(`assets/json-schema/${type}.json`)
      .pipe(
        tap(jsonMetaData => {
          jsonMetaData.fields.map(jsonEntity => {
            let TemplateOptions = {};
            this.loadTemplateOptions(
              'translation',
              jsonEntity.translation,
              TemplateOptions
            );
            this.loadTemplateOptions(
              'options',
              jsonEntity.options,
              TemplateOptions
            );

            let frmStruct = {
              name: jsonEntity.name,
              type: jsonEntity.type,
              id: jsonEntity.id,
              key: jsonEntity.fieldKey,
              templateOptions: TemplateOptions
            };

            this.fieldList.push(frmStruct);
          });

          this.form = new FormGroup({});
          this.options = {};
          this.fields = this.fieldList;
          this.model = {};

          console.log(this.fields);
        })
      )
      .subscribe();
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}
