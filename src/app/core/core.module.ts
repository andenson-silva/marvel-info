import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthenticationModule } from './authentication/authtentication.module';

@NgModule({
    imports: [HttpClientModule, AuthenticationModule],
    exports: [],
    declarations: [],
    providers: [],
})
export class CoreModule { }
