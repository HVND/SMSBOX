import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, Http } from "@angular/http";
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from "ng2-translate";
import { AdminComponentModule } from "./admin/admin.module";
import { ThereComponentModule } from "./there/there.module";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ConfigService } from "./config/config-service";
import { LoginService } from "./login/login.service";
import { SmsBoxComponentModule } from "./smsbox/smsbox.module";
import { SignupComponent } from "./signup/signup.component";
import { SignupService } from "./signup/signup-service";
import { NavigationComponent } from "./navigation/navigation.component";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { UserComponentModule } from "./user/user.module";
import { CubeGridComponent } from "./common/spinner/cube-grid/cube-grid.component";
import { EqualValidatorModule } from "./common/equal-validator.directive";
import { CrudModule } from "./crud/crud.module";
import { CrudViewResolve } from "./crud/crud-view/crud-view.resolve";
import { CrudCreateResolve } from "./crud/crud-create/crud-create.resolve";
import { CrudUpdateResolve } from "./crud/crud-update/crud-update.resolve";
import { CrudService } from "./crud/crud.service";
import { GrowlService } from "./services/growl/growl.service";
import { GrowlModule } from "primeng/components/growl/growl";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => {
                return new TranslateStaticLoader(http, '../assets/i18n', '.json')
            },
            deps: [Http]
        }),
        //BreadcrumbModule.forRoot(),
        CrudModule,
        EqualValidatorModule,
        AdminComponentModule,
        UserComponentModule,
        ThereComponentModule,
        SmsBoxComponentModule
    ],
    declarations: [
        AppComponent,
        NotFoundComponent,
        SignupComponent,
        LoginComponent,
        NavigationComponent,
        CubeGridComponent
    ],
    providers: [
        CrudService,
        CrudViewResolve,
        CrudCreateResolve,
        CrudUpdateResolve,
        FormBuilder,
        ConfigService,
        LoginService,
        SignupService,
        GrowlService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
