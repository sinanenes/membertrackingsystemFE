import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-izin',
  templateUrl: './add-edit-izin.component.html',
  styleUrls: ['./add-edit-izin.component.css']
})
export class AddEditIzinComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  @Input() izin: any;
  IzinId: string = "";
  KisiId: string = "";
  BaslangicTarih: string = "";
  BitisTarih: string = "";
  Aciklama: string = "";

  ngOnInit(): void {
    this.IzinId = this.izin.BilgilendirmeId;
    this.KisiId = this.izin.KisiId;
    this.BaslangicTarih = this.izin.BaslangicTarih;
    this.BitisTarih = this.izin.BitisTarih;
    this.Aciklama = this.izin.Aciklama;
  }

  addIzin() {
    var val = {
      IzinId: this.IzinId,
      KisiId: this.KisiId,
      BaslangicTarih: this.BaslangicTarih,
      BitisTarih: this.BitisTarih,
      Aciklama: this.Aciklama
    };

    this.service.addIzin(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateIzin() {
    var val = {
      IzinId: this.IzinId,
      KisiId: this.KisiId,
      BaslangicTarih: this.BaslangicTarih,
      BitisTarih: this.BitisTarih,
      Aciklama: this.Aciklama
    };
    this.service.updateIzin(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
