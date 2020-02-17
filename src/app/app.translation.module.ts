import { NgModule,ModuleWithProviders } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [TranslateModule],
  exports: [TranslateModule],
})
export class AppTranslationModule { 
  constructor(){}

  static forRoot():ModuleWithProviders{
    return{
      ngModule: AppTranslationModule
    } 
  }
}

