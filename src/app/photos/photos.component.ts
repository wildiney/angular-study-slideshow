import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  imgNumber:number = 0;
  maxImages:number = 129;
  urlimagem:string;
  baseUrl = "./assets/thumbnail/20180317-aniversario-3-anos-luca-";

  constructor() { }

  ngOnInit() {
    this.next();
  }

  previous(){
    let posfixUrl = ".jpg";
    let NewImgNumber:string;
  
    this.imgNumber--;

    if(this.imgNumber<=0){
      this.imgNumber=1;
    }
    if(this.imgNumber<10){
      NewImgNumber = "0"+this.imgNumber;
    } else {
      NewImgNumber = ""+this.imgNumber;
    }
    this.urlimagem = this.baseUrl+NewImgNumber+posfixUrl;

    console.log(this.urlimagem);
  }
  next(){
    let posfixUrl = ".jpg";
    let NewImgNumber:string;

    this.imgNumber++;

    if(this.imgNumber>=this.maxImages){
      this.imgNumber=1;
    }
    if(this.imgNumber<=0){
      this.imgNumber=1;
    }
    if(this.imgNumber<10){
      NewImgNumber = "0"+this.imgNumber;
    } else {
      NewImgNumber = ""+this.imgNumber;
    }
    this.urlimagem = this.baseUrl+NewImgNumber+posfixUrl;

    console.log(this.urlimagem);
  }

}
