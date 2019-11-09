import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { CogComponent } from './cog/cog.component';
import { FolderComponent } from './folder/folder.component';
import { GeneralResultComponent } from './dashboard/general-results/general-results.component';
import { RatingsByCategoryComponent } from './dashboard/ratings-by-category/ratings-by-category.component';
import { TermsComponent } from './dashboard/terms/terms.component';
import { SupportRequestComponent } from './dashboard/support-request/support-request.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChatComponent,
    MessageComponent,
    CogComponent,
    FolderComponent,
    GeneralResultComponent,
    RatingsByCategoryComponent,
    TermsComponent,
    SupportRequestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
