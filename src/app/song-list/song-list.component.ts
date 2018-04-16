import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongsComponent implements OnInit {
  // instantiate posts to an empty array
  songs: any = [];

  constructor(private songsService: SongsService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.songsService.getAllSongs().subscribe(songs => {
      this.songs = songs;
    });
  }
}
