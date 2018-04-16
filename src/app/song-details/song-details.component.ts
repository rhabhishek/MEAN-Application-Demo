import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
               private router: Router,
               private  songsService: SongsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.songsService.getSong(id).subscribe(songElem => {
      this.song = songElem;
    });
  }

  onDeleteSubmit() {
    console.log(this.song._id);
    this.songsService.deleteSong(this.song);
    this.router.navigate(['/songs']);
  }

  onUpdateSubmit() {
    console.log(this.song);
    this.songsService.updateSong(this.song);
    this.router.navigate(['/songs']);
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }



}
