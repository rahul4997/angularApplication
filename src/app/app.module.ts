import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransitionComponent } from './transition/transition.component';
import { EaseComponent } from './ease/ease.component';
import { ListOfTransitionsComponent } from './list-of-transitions/list-of-transitions.component';
import { AnimationEffectsComponent } from './animation-effects/animation-effects.component';
import { ButtonEffectsComponent } from './button-effects/button-effects.component';
import { ImageEffectComponent } from './image-effect/image-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    TransitionComponent,
    EaseComponent,
    ListOfTransitionsComponent,
    AnimationEffectsComponent,
    ButtonEffectsComponent,
    ImageEffectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
