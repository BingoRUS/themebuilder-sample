import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as lessCompiler from 'less/lib/less-browser';
import * as ThemeBuilder from 'devextreme-themebuilder';

@Injectable()
export class ThemeService {
    loadLess: any;

    constructor(private http: HttpClient) {
        this.loadLess = fileName => this.http.get(fileName, { responseType: 'text' }).toPromise();
    }

    applyTheme = (accentColor?: string, backgroundColor?: string, textColor?: string, borderColor?: string) => new Promise((resolve, reject) => {
        const items = [];

        if(accentColor) items.push({"key":"@base-accent","value":accentColor});
        if(backgroundColor) items.push({"key":"@base-bg","value":backgroundColor});
        if(textColor) items.push({"key":"@base-text-color","value":textColor});
        if(borderColor) items.push({"key":"@base-border-color","value":borderColor});

        ThemeBuilder.buildTheme({
            lessCompiler: lessCompiler(window, { rootpath: "assets/devextreme/css", math: "always" }),
            lessPath: "assets/themebuilder/less",
            outputColorScheme: "custom",
            reader: this.loadLess,
            items: items,
            baseTheme: "generic.light"
        }).then(result => {
            var styleElement = document.getElementById("theme-styles");
            styleElement.innerHTML = result.css;
            resolve();
        });
    });
}