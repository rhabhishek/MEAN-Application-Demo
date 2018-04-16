import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SongsComponent } from './song-list/song-list.component';
import {SongsService} from './songs.service';
import { AddSongComponent } from './add-song/add-song.component';
import {SongDetailsComponent} from './song-details/song-details.component';
import { SongListItemComponent } from './song-list-item/song-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {NgbModalStack} from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

// Define the routes
const ROUTES = [
  { path: '', component: SongsComponent},
  { path: 'songs', redirectTo: '', pathMatch: 'full' },
  { path: 'add', component: AddSongComponent },
  { path: 'song/:id', component: SongDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    AddSongComponent,
    SongDetailsComponent,
    SongListItemComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgbModalModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
