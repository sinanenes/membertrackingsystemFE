import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-kisi',
  templateUrl: './add-edit-kisi.component.html',
  styleUrls: ['./add-edit-kisi.component.css']
})

export class AddEditKisiComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() kisi:any;
  KisiId:string="";
  KisiAdi:string="";
  KisiSoyadi:string="";
  TCNo:string="";
  UyeNo: string = "";
  KisiTipiKod:string="";
  KisiFotoAdi:string="";
  KisiFotoDosyaYolu:string="";

  KisiTipleriList:any=[];

  ngOnInit(): void {
    this.loadKisiTipleriList();    
  }

  loadKisiTipleriList(){
    this.service.getAllKisiTipleri().subscribe((data:any)=>{
      this.KisiTipleriList=data;

      this.KisiId = this.kisi.KisiId;
      this.KisiAdi = this.kisi.KisiAdi;
      this.KisiSoyadi = this.kisi.KisiSoyadi;
      this.TCNo = this.kisi.TCNo;
      this.UyeNo = this.kisi.UyeNo;
      this.KisiTipiKod=this.kisi.KisiTipiKod;
      this.KisiFotoAdi = this.kisi.KisiFotoAdi;

      this.KisiFotoDosyaYolu = this.service.PhotoUrl + this.KisiFotoAdi;
    });
  }


 addKisi(){
    var val = {
      KisiId: this.KisiId,
      KisiAdi: this.KisiAdi,
      KisiSoyadi: this.KisiSoyadi,
      TCNo:this.TCNo,
      UyeNo:this.UyeNo,
      KisiTipiKod:this.KisiTipiKod,
      KisiFotoAdi:this.KisiFotoAdi
    };

    this.service.addKisi(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateKisi(){
    var val = {
      KisiId: this.KisiId,
      KisiAdi: this.KisiAdi,
      KisiSoyadi: this.KisiSoyadi,
      TCNo: this.TCNo,
      UyeNo: this.UyeNo,
      KisiTipiKod:this.KisiTipiKod,
      KisiFotoAdi:this.KisiFotoAdi
    };
    this.service.updateKisi(val).subscribe(res => {
      alert(res.toString());
    });
  }

  uploadPhoto(event: any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.KisiFotoAdi=data.toString();
      this.KisiFotoDosyaYolu=this.service.PhotoUrl+this.KisiFotoAdi;
    });
  }

}
