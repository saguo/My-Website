"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.toggle = false;
    }
    AppComponent.prototype.handleClick = function () {
        this.toggle = !this.toggle;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            animations: [
                core_1.trigger('toggleState', [
                    // What happens when toggleState is true
                    core_1.state('true', core_1.style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(0%,0,0)' })),
                    // What happens when toggleState is false
                    core_1.state('false', core_1.style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(-30%,0,0)' })),
                    // transition
                    core_1.transition('* => *', core_1.animate('200ms')),
                ])
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map