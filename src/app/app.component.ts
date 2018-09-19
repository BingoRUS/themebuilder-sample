import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private themeService: ThemeService) { }

    colorChanged = () => {
        this.themeService.applyTheme(this.accentColor, this.backgroundColor, this.textColor, this.borderColor);
    }

    accentColor: string = "#337ab7";
    backgroundColor: string = "#fff";
    textColor: string = "#333";
    borderColor: string = "#ddd";

    today: Date = new Date();
}
