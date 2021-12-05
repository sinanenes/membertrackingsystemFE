import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-kurs',
  templateUrl: './add-edit-kurs.component.html',
  styleUrls: ['./add-edit-kurs.component.css']
})
export class AddEditKursComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() kurs: any;
  KursId: string = "";
  KursAdi: string = "";
  KursTurKod: string = "";
  BaslangicTarih: string = "";
  BitisTarih: string = "";
  Kapasite: string = "";
  KursUcret: string = "";
  EgitmenId:string = "";
  
  KursTurleriList: any = [];
  EgitmenlerList: any = [];

  ngOnInit(): void {
    this.loadKursTurleriList();
  }

  loadKursTurleriList() {
    this.service.getAllKursTurleri().subscribe((data: any) => {
      this.KursTurleriList = data;
    
      this.service.getAllEgitmenler().subscribe((veri:any)=>{
        this.EgitmenlerList = veri;
        
        this.KursId = this.kurs.KursId;
        this.KursAdi = this.kurs.KursAdi;
        this.KursTurKod = this.kurs.KursTurKod;
        this.BaslangicTarih = this.kurs.BaslangicTarih;
        this.BitisTarih = this.kurs.BitisTarih;
        this.Kapasite = this.kurs.Kapasite;
        this.KursUcret = this.kurs.KursUcret;
        this.EgitmenId = this.kurs.EgitmenId;
      });
    });
  }

  addKurs() {
    var val = {
      KursId: this.KursId,
      KursAdi: this.KursAdi,
      KursTurKod: this.KursTurKod,
      BaslangicTarih: this.BaslangicTarih,
      BitisTarih: this.BitisTarih,
      Kapasite: this.Kapasite,
      KursUcret: this.KursUcret,
      EgitmenId: this.EgitmenId
    };

    this.service.addKurs(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateKurs() {
    var val = {
      KursId: this.KursId,
      KursAdi: this.KursAdi,
      KursTurKod: this.KursTurKod,
      BaslangicTarih: this.BaslangicTarih,
      BitisTarih: this.BitisTarih,
      Kapasite: this.Kapasite,
      KursUcret: this.KursUcret,
      EgitmenId: this.EgitmenId
    };
    this.service.updateKurs(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
