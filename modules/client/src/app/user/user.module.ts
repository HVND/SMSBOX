import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { RouterModule } from "@angular/router";
import { UserViewComponent } from "./user-view/user-view.component";
import { MessageComponent } from "./message/message.component";
import { UserSettingsComponent } from "./settings/user-settings.component";
import { UserDashboardComponent } from "./dashboard/user-dashboard.component";
import { BreadcrumbModule } from "../breadcrumb/breadcrumb.component";
import { NavigationBarComponentModule } from "../navigation/navigationBar/navigation-bar.component";
import { TranslateModule } from "ng2-translate";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EqualValidatorModule } from "../common/equal-validator.directive";
import { UserSettingsService } from "./settings/user-settings.service";
import { AlertModule, Ng2BootstrapModule } from "ng2-bootstrap";
import { IOBoxComponent } from "./message/iobox/iobox.component";
import { ChatComponent } from "./message/chat/chat.component";
import { MessageService } from "./message/message.service";
import {ChartComponentModule, LineChart} from "../chart/lineChart.component";
import {BaAmChart} from "../chart/theme/components/baAmChart/baAmChart.component";
import {LineChartService} from "../chart/lineChart.service";
import {BaThemeConfigProvider} from "../chart/theme/theme.configProvider";
import { HttpModule } from "@angular/http";

const DECLARATION = [
    UserComponent,
    UserViewComponent,
    MessageComponent,
    UserSettingsComponent,
    UserDashboardComponent,
    IOBoxComponent,
    ChatComponent,
    BaAmChart,
    LineChart
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BreadcrumbModule,
        TranslateModule,
        FormsModule,
        NavigationBarComponentModule,
        EqualValidatorModule,
        AlertModule,
        Ng2BootstrapModule,
        HttpModule
    ],
    declarations: [
        DECLARATION
    ],
    exports: [
        DECLARATION
    ],
    providers: [
        UserSettingsService,
        LineChartService,
        BaThemeConfigProvider,
        MessageService
    ]
})

export class UserComponentModule {

}
