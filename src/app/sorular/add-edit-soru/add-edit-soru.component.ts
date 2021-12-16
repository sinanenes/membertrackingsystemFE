import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-soru',
  templateUrl: './add-edit-soru.component.html',
  styleUrls: ['./add-edit-soru.component.css']
})
export class AddEditSoruComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() soru: any;
  SoruId: string = "";
  KullaniciId: string = "";
  SoruTarih: string = "";
  CevapTarih: string = "";
  SoruMetni: string = "";
  CevapMetni: string = "";
  CevaplayanId: string = "";
  

  ngOnInit(): void {
    this.loadSorularList();
  }
  loadSorularList() {
    this.SoruId = this.soru.SoruId;
    this.KullaniciId = this.soru.KullaniciId;
    this.SoruTarih = this.soru.SoruTarih;
    this.CevapTarih = this.soru.CevapTarih;
    this.SoruMetni = this.soru.SoruMetni;
    this.CevapMetni = this.soru.CevapMetni;
    this.CevaplayanId = this.soru.CevaplayanId;
  }

  addSoru() {
    var val = {
      SoruId: this.SoruId,
      KullaniciId: this.KullaniciId,
      SoruTarih: this.SoruTarih,
      CevapTarih: this.CevapTarih,
      SoruMetni: this.SoruMetni,
      CevapMetni: this.CevapMetni,
      CevaplayanId: this.CevaplayanId
    };

    this.service.addSoru(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateSoru() {
    var val = {
      SoruId: this.SoruId,
      KullaniciId: this.KullaniciId,
      SoruTarih: this.SoruTarih,
      CevapTarih: this.CevapTarih,
      SoruMetni: this.SoruMetni,
      CevapMetni: this.CevapMetni,
      CevaplayanId: this.CevaplayanId
    };
    this.service.updateSoru(val).subscribe(res => {
      alert(res.toString());
    });
  }


}