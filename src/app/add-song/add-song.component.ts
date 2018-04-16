import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SongsService} from '../songs.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {

  constructor(private songsService: SongsService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const song = form.value;
    console.log(song);
    this.songsService.addSong(song);
    this.router.navigate(['/songs']);
  }
}
