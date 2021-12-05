import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-bilgilendirme',
  templateUrl: './add-edit-bilgilendirme.component.html',
  styleUrls: ['./add-edit-bilgilendirme.component.css']
})
export class AddEditBilgilendirmeComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() bilgilendirme: any;
  BilgilendirmeId: string = "";
  BilgilendirmeMetni: string = "";
  BaslangicTarih: string = "";
  BitisTarih: string = "";
  Aciklama: string = "";

  ngOnInit(): void {
    this.BilgilendirmeId = this.bilgilendirme.BilgilendirmeId;
    this.BilgilendirmeMetni = this.bilgilendirme.BilgilendirmeMetni;
    this.BaslangicTarih = this.bilgilendirme.BaslangicTarih;
    this.BitisTarih = this.bilgilendirme.BitisTarih;
    this.Aciklama = this.bilgilendirme.Aciklama;
  }

  addBilgilendirme() {
    var val = {
      BilgilendirmeId: this.BilgilendirmeId,
      BilgilendirmeMetni: this.BilgilendirmeMetni,
      BaslangicTarih: this.BaslangicTarih,
      BitisTarih: this.BitisTarih,
      Aciklama: this.Aciklama
    };

    this.service.addBilgilendirme(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateBilgilendirme() {
    var val = {
      BilgilendirmeId: this.BilgilendirmeId,
      BilgilendirmeMetni: this.BilgilendirmeMetni,
      BaslangicTarih: this.BaslangicTarih,
      BitisTarih: this.BitisTarih,
      Aciklama: this.Aciklama
    };
    this.service.updateBilgilendirme(val).subscribe(res => {
      alert(res.toString());
    });
  }


}
