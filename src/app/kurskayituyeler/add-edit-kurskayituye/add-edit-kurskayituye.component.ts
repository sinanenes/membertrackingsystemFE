import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-kurskayituye',
  templateUrl: './add-edit-kurskayituye.component.html',
  styleUrls: ['./add-edit-kurskayituye.component.css']
})
export class AddEditKurskayituyeComponent implements OnInit {

  constructor(private service: SharedService) { }
  
  @Input() kurskayituye: any;
  KursKayitUyeId: string = "";
  KursId: string = "";
  UyeId: string = "";
  BaslangicTarih: string = "";
  BitisTarih: string = "";
  
  ngOnInit(): void {
    this.KursKayitUyeId = this.kurskayituye.KursKayitUyeId;
    this.KursId = this.kurskayituye.KursId;
    this.UyeId = this.kurskayituye.UyeId;
    this.BaslangicTarih = this.kurskayituye.BaslangicTarih;
    this.BitisTarih = this.kurskayituye.BitisTarih;
  }

  addKursKayitUye() {
    var val = {
      KursKayitUyeId: this.KursKayitUyeId,
      KursId: this.KursId,
      UyeId: this.UyeId,
      BaslangicTarih: this.BaslangicTarih,
      BitisTarih: this.BitisTarih
    };

    this.service.addKursKayitUye(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateKursKayitUye() {
    var val = {
      KursKayitUyeId: this.KursKayitUyeId,
      KursId: this.KursId,
      UyeId: this.UyeId,
      BaslangicTarih: this.BaslangicTarih,
      BitisTarih: this.BitisTarih
    };
    this.service.updateKursKayitUye(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
