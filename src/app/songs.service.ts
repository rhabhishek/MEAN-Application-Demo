import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SongsService {

  constructor(private http: Http) { }

  // Get all song-list from the API
  getAllSongs(): Observable<any[]>  {
    return this.http.get('/api/songs')
      .map(res => res.json());
  }

  getSong(id): Observable<any[]> {
    return this.http.get('/api/songs/' + id + '')
      .map(res => res.json());
  }

  addSong(song) {
    console.log(song);
    return this.http.post('/api/songs', song).subscribe(
      res => res.json(),
      err => err.json()
    );
  }


  updateSong(song) {
    return this.http.patch('/api/songs/' + song._id, song).subscribe(
      res => res.json(),
      err => err.json()
    );
  }

  deleteSong(song) {
    return this.http.delete('/api/songs/' + song._id).subscribe(
      res => res.json(),
      err => err.json()
    );
  }


}
