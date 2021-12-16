import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-kullanici',
  templateUrl: './add-edit-kullanici.component.html',
  styleUrls: ['./add-edit-kullanici.component.css']
})
export class AddEditKullaniciComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() kullanici: any;
  KullaniciId: string = "";
  KullaniciAdi: string = "";
  KullaniciTipiKod: string = "";
  AktifPasifKod: string = "";

  ngOnInit(): void {
    this.KullaniciId = this.kullanici.KullaniciId;
    this.KullaniciAdi = this.kullanici.KullaniciAdi;
    this.KullaniciTipiKod = this.kullanici.KullaniciTipiKod;
    this.AktifPasifKod = this.kullanici.AktifPasifKod;
  }

  addKullanici() {
    var val = {
      KullaniciId: this.KullaniciId,
      KullaniciAdi: this.KullaniciAdi,
      KullaniciTipiKod: this.KullaniciTipiKod,
      AktifPasifKod: this.AktifPasifKod
    };

    this.service.addKullanici(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateKullanici() {
    var val = {
      KullaniciId: this.KullaniciId,
      KullaniciAdi: this.KullaniciAdi,
      KullaniciTipiKod: this.KullaniciTipiKod,
      AktifPasifKod: this.AktifPasifKod
    };
    this.service.updateKullanici(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
