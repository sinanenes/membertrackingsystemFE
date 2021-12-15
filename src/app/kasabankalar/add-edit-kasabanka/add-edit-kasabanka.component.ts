import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-kasabanka',
  templateUrl: './add-edit-kasabanka.component.html',
  styleUrls: ['./add-edit-kasabanka.component.css']
})
export class AddEditKasabankaComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() kasabanka: any;
  KasaBankaId: string = "";
  KasaBankaAdi: string = "";
  KasaBankaTurKod: string = "";
  Aciklama: string = "";
  
  ngOnInit(): void {
    this.KasaBankaId = this.kasabanka.KasaBankaId;
    this.KasaBankaAdi = this.kasabanka.KasaBankaAdi;
    this.KasaBankaTurKod = this.kasabanka.KasaBankaTurKod;
    this.Aciklama = this.kasabanka.Aciklama;
  }

  addKasaBanka() {
    var val = {
      KasaBankaId: this.KasaBankaId,
      KasaBankaAdi: this.KasaBankaAdi,
      KasaBankaTurKod: this.KasaBankaTurKod,
      Aciklama: this.Aciklama
    };

    this.service.addKasaBanka(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateKasaBanka() {
    var val = {
      KasaBankaId: this.KasaBankaId,
      KasaBankaAdi: this.KasaBankaAdi,
      KasaBankaTurKod: this.KasaBankaTurKod,
      Aciklama: this.Aciklama
    };
    this.service.updateKasaBanka(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
