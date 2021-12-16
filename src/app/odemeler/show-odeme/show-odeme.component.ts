import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-odeme',
  templateUrl: './show-odeme.component.html',
  styleUrls: ['./show-odeme.component.css']
})
export class ShowOdemeComponent implements OnInit {

  constructor(private service: SharedService) { }

  OdemelerList: any = [];

  ModalTitle: string = "";
  ActivateAddEditOdemeComp: boolean = false;
  odeme: any;

  OdemeIdFilter: string = "";
  KisiIdFilter: string = "";
  OdemelerListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshOdemelerList();
  }

  addClick() {
    this.odeme = {
      OdemeId: 0,
      KullaniciId:0,
      KisiId: 0,
      OdemeTutar: 0,
      OdemeTarih: "",
      OdemeTurKod: "",
      DonemAyKod: "",
      DonemYilKod: "",
      KasaBankaId: 0,
      Aciklama: ""
    }
    this.ModalTitle = "Odeme Ekle";
    this.ActivateAddEditOdemeComp = true;

  }

  editClick(item: any) {
    this.odeme = item;
    this.ModalTitle = "Odeme Duzelt";
    this.ActivateAddEditOdemeComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Emin misiniz?')) {
      this.service.deleteOdeme(item.OdemeId).subscribe(data => {
        alert(data.toString());
        this.refreshOdemelerList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditOdemeComp = false;
    this.refreshOdemelerList();
  }


  refreshOdemelerList() {
    this.service.getOdemelerList().subscribe(data => {
      this.OdemelerList = data;
      this.OdemelerListWithoutFilter = data;
    });
  }

  filterFn() {
    var OdemeIdFilter = this.OdemeIdFilter;
    var KisiIdFilter = this.KisiIdFilter;
    this.OdemelerList = this.OdemelerListWithoutFilter.filter(function (el: any) {
      return el.OdemeId.toString().toLowerCase().includes(OdemeIdFilter.toString().trim().toLowerCase()) &&
        el.KisiId.toString().toLowerCase().includes(KisiIdFilter.toString().trim().toLowerCase())
    });
  }

  sortResult(prop: any, asc: any) {
    this.OdemelerList = this.OdemelerListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

}
