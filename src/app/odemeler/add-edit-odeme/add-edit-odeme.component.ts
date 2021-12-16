import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-odeme',
  templateUrl: './add-edit-odeme.component.html',
  styleUrls: ['./add-edit-odeme.component.css']
})
export class AddEditOdemeComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() odeme: any;
  OdemeId: string = "";
  KullaniciId: string = "";
  KisiId: string = "";
  OdemeTutar: string = "";
  OdemeTarih: string = "";
  OdemeTurKod: string = "";
  DonemAyKod: string = "";
  DonemYilKod: string = "";
  KasaBankaId: string = "";
  Aciklama: string = "";

  ngOnInit(): void {
    this.loadOdemelerList();
  }
  loadOdemelerList() {
    this.OdemeId = this.odeme.OdemeId;
    this.KullaniciId = this.odeme.KullaniciId;
    this.KisiId = this.odeme.KisiId;
    this.OdemeTutar = this.odeme.OdemeTutar;
    this.OdemeTarih = this.odeme.OdemeTarih;
    this.OdemeTurKod = this.odeme.OdemeTurKod;
    this.DonemAyKod = this.odeme.DonemAyKod;
    this.DonemYilKod = this.odeme.DonemYilKod;
    this.KasaBankaId = this.odeme.KasaBankaId;
    this.Aciklama = this.odeme.Aciklama;
  }

  addOdeme() {
    var val = {
      OdemeId: this.OdemeId,
      KullaniciId: this.KullaniciId,
      KisiId: this.KisiId,
      OdemeTutar: this.OdemeTutar,
      OdemeTarih: this.OdemeTarih,
      OdemeTurKod: this.OdemeTurKod,
      DonemAyKod: this.DonemAyKod,
      DonemYilKod: this.DonemYilKod,
      KasaBankaId: this.KasaBankaId,
      Aciklama: this.Aciklama
    };

    this.service.addOdeme(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateOdeme() {
    var val = {
      OdemeId: this.OdemeId,
      KisiId: this.KisiId,
      OdemeTarih: this.OdemeTarih,
      DonemAyKod: this.DonemAyKod,
      DonemYilKod: this.DonemYilKod,
      OdemeTurKod: this.OdemeTurKod,
      OdemeTutar: this.OdemeTutar,
      Aciklama: this.Aciklama
    };
    this.service.updateOdeme(val).subscribe(res => {
      alert(res.toString());
    });
  }


}
