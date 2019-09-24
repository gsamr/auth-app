import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.sass']
})
export class FileUploaderComponent implements OnInit {

  constructor() { }

  public files_list:any = [];

  ngOnInit() {
    this.files_list = JSON.parse(localStorage.getItem("file_list"))
    console.log(this.files_list)
  }

}
