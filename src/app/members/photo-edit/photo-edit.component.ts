import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/_model/Photo';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {
  @Input() photos: Photo[];

  constructor() {}

  ngOnInit() {}
}
