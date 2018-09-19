import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DxColorBoxModule, DxCalendarModule, DxRangeSliderModule, DxCheckBoxModule } from 'devextreme-angular';

import { ThemeService } from './theme.service';
import { AppComponent } from './app.component';

export function initTheme(themeService: ThemeService) {
    return () => themeService.applyTheme();
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        DxColorBoxModule,
        DxCalendarModule,
        DxRangeSliderModule,
        DxCheckBoxModule
    ],
    providers: [
        ThemeService,
        { provide: APP_INITIALIZER, useFactory: initTheme, deps: [ThemeService], multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
