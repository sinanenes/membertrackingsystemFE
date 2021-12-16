import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-tahsilat',
  templateUrl: './add-edit-tahsilat.component.html',
  styleUrls: ['./add-edit-tahsilat.component.css']
})
export class AddEditTahsilatComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() tahsilat: any;
  TahsilatId: string = "";
  KisiId: string = "";
  TahsilatTarih: string = "";
  DonemAyKod: string = "";
  DonemYilKod: string = "";
  TahsilatTurKod: string = "";
  TahsilatTutar: string = "";
  KasaBankaId: string = "";
  Aciklama: string = "";

  ngOnInit(): void {
    this.loadTahsilatlarList();
  }
  loadTahsilatlarList() {
    this.TahsilatId = this.tahsilat.TahsilatId;
    this.KisiId = this.tahsilat.KisiId;
    this.TahsilatTarih = this.tahsilat.TahsilatTarih;
    this.DonemAyKod = this.tahsilat.DonemAyKod;
    this.DonemYilKod = this.tahsilat.DonemYilKod;
    this.TahsilatTurKod = this.tahsilat.TahsilatTurKod;
    this.TahsilatTutar = this.tahsilat.TahsilatTutar;
    this.KasaBankaId = this.tahsilat.KasaBankaId;
    this.Aciklama = this.tahsilat.Aciklama;
  }

  addTahsilat() {
    var val = {
      TahsilatId: this.TahsilatId,
      KisiId: this.KisiId,
      TahsilatTarih: this.TahsilatTarih,
      DonemAyKod: this.DonemAyKod,
      DonemYilKod: this.DonemYilKod,
      TahsilatTurKod: this.TahsilatTurKod,
      TahsilatTutar: this.TahsilatTutar,
      KasaBankaId: this.KasaBankaId,
      Aciklama: this.Aciklama
    };

    this.service.addTahsilat(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateTahsilat() {
    var val = {
      TahsilatId: this.TahsilatId,
      KisiId: this.KisiId,
      TahsilatTarih: this.TahsilatTarih,
      DonemAyKod: this.DonemAyKod,
      DonemYilKod: this.DonemYilKod,
      TahsilatTurKod: this.TahsilatTurKod,
      TahsilatTutar: this.TahsilatTutar,
      KasaBankaId: this.KasaBankaId,
      Aciklama: this.Aciklama
    };
    this.service.updateTahsilat(val).subscribe(res => {
      alert(res.toString());
    });
  }


}