import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {SongsService} from '../songs.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {

  song;
  constructor( private modalService: NgbModal,
               private route: ActivatedRoute,
               private  songsService: SongsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.songsService.getSong(id).subscribe(songElem => {
      this.song = songElem;
    });
  }

  onDeleteSubmit(form: NgForm) {
    console.log(this.song);
    this.songsService.deleteSong(this.song);
  }

  onUpdateSubmit(updateForm: NgForm) {
    console.log(this.song);
    this.songsService.updateSong(this.song);
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }



}
