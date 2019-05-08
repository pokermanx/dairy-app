import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './shared/ui/ui.module';
import { GeneralModule } from './general/general.module';
import { InitService } from './shared/services/init.servece';

export function initFactory(
  initService: InitService,
) {
  return () =>
    Promise.all([
      initService.init(),
    ]);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UiModule,
    GeneralModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    InitService,
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
