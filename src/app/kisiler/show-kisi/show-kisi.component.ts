import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-kisi',
  templateUrl: './show-kisi.component.html',
  styleUrls: ['./show-kisi.component.css']
})
export class ShowKisiComponent implements OnInit {

  constructor(private service:SharedService) { }

  KisilerList: any = [];

  ModalTitle: string="";
  ActivateAddEditKisiComp: boolean = false;
  kisi: any;

  KisiIdFilter: string = "";
  KisiAdiFilter: string = "";
  KisilerListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshKisilerList();
  }

  addClick() {
    this.kisi = {
      KisiId: 0,
      KisiAdi: "",
      KisiSoyadi: "",
      KisiTipiKod:1,
      KisiFotoAdi:"anonymous.png"
    }
    this.ModalTitle = "Kisi Ekle";
    this.ActivateAddEditKisiComp = true;

  }

  editClick(item: any) {
    this.kisi = item;
    this.ModalTitle = "Kisi Duzelt";
    this.ActivateAddEditKisiComp = true;
  }

  deleteClick(item:any){
    if(confirm('Emin misiniz?')){
      this.service.deleteKisi(item.KisiId).subscribe(data=>{
        alert(data.toString());
        this.refreshKisilerList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditKisiComp = false;
    this.refreshKisilerList();
  }


  refreshKisilerList() {
    this.service.getKisilerList().subscribe(data => {
      this.KisilerList = data;
      this.KisilerListWithoutFilter=data;
    });
  }

  filterFn(){
    var KisiIdFilter = this.KisiIdFilter;
    var KisiAdiFilter = this.KisiAdiFilter;
    this.KisilerList = this.KisilerListWithoutFilter.filter(function(el: any){
      return el.KisiId.toString().toLowerCase().includes(KisiIdFilter.toString().trim().toLowerCase())&&
              el.KisiAdi.toString().toLowerCase().includes(KisiAdiFilter.toString().trim().toLowerCase())
    });
  }

  sortResult(prop: any,asc: any){
    this.KisilerList=this.KisilerListWithoutFilter.sort(function(a: any,b: any){
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }
}
