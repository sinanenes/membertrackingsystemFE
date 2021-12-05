import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-borc',
  templateUrl: './add-edit-borc.component.html',
  styleUrls: ['./add-edit-borc.component.css']
})
export class AddEditBorcComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() borc: any;
  BorcId: string = "";
  KisiId: string = "";
  BorcTarih: string = "";
  DonemAyKod: string = "";
  DonemYilKod: string = "";
  BorcTurKod: string = "";
  BorcTutar: string = "";
  Aciklama:string="";

  ngOnInit(): void {
    this.loadBorclarList();
  }
  loadBorclarList() {
    this.BorcId = this.borc.BorcId;
    this.KisiId=this.borc.KisiId;
    this.BorcTarih = this.borc.BorcTarih;
    this.DonemAyKod = this.borc.DonemAyKod;
    this.DonemYilKod = this.borc.DonemYilKod;
    this.BorcTurKod = this.borc.BorcTurKod;
    this.BorcTutar = this.borc.BorcTutar;
    this.Aciklama = this.borc.Aciklama;
  }

  addBorc() {
    var val = {
      BorcId: this.BorcId,
      KisiId: this.KisiId,
      BorcTarih: this.BorcTarih,
      DonemAyKod: this.DonemAyKod,
      DonemYilKod: this.DonemYilKod,
      BorcTurKod: this.BorcTurKod,
      BorcTutar: this.BorcTutar,
      Aciklama: this.Aciklama
    };

    this.service.addBorc(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateBorc() {
    var val = {
      BorcId: this.BorcId,
      KisiId: this.KisiId,
      BorcTarih: this.BorcTarih,
      DonemAyKod: this.DonemAyKod,
      DonemYilKod: this.DonemYilKod,
      BorcTurKod: this.BorcTurKod,
      BorcTutar: this.BorcTutar,
      Aciklama: this.Aciklama
    };
    this.service.updateBorc(val).subscribe(res => {
      alert(res.toString());
    });
  }


}
