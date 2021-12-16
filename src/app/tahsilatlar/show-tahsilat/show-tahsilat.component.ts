import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-tahsilat',
  templateUrl: './show-tahsilat.component.html',
  styleUrls: ['./show-tahsilat.component.css']
})
export class ShowTahsilatComponent implements OnInit {

  constructor(private service: SharedService) { }

  TahsilatlarList: any = [];

  ModalTitle: string = "";
  ActivateAddEditTahsilatComp: boolean = false;
  tahsilat: any;

  TahsilatIdFilter: string = "";
  KisiIdFilter: string = "";
  TahsilatlarListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshTahsilatlarList();
  }

  addClick() {
    this.tahsilat = {
      TahsilatId: 0,
      KisiId: 0,
      TahsilatTarih: "",
      DonemAyKod: "",
      DonemYilKod: "",
      TahsilatTurKod: "",
      TahsilatTutar: 0,
      KasaBankaId: 0,
      Aciklama: ""
    }
    this.ModalTitle = "Tahsilat Ekle";
    this.ActivateAddEditTahsilatComp = true;

  }

  editClick(item: any) {
    this.tahsilat = item;
    this.ModalTitle = "Tahsilat Duzelt";
    this.ActivateAddEditTahsilatComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Emin misiniz?')) {
      this.service.deleteTahsilat(item.TahsilatId).subscribe(data => {
        alert(data.toString());
        this.refreshTahsilatlarList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditTahsilatComp = false;
    this.refreshTahsilatlarList();
  }


  refreshTahsilatlarList() {
    this.service.getTahsilatlarList().subscribe(data => {
      this.TahsilatlarList = data;
      this.TahsilatlarListWithoutFilter = data;
    });
  }

  filterFn() {
    var TahsilatIdFilter = this.TahsilatIdFilter;
    var KisiIdFilter = this.KisiIdFilter;
    this.TahsilatlarList = this.TahsilatlarListWithoutFilter.filter(function (el: any) {
      return el.TahsilatId.toString().toLowerCase().includes(TahsilatIdFilter.toString().trim().toLowerCase()) &&
        el.KisiId.toString().toLowerCase().includes(KisiIdFilter.toString().trim().toLowerCase())
    });
  }

  sortResult(prop: any, asc: any) {
    this.TahsilatlarList = this.TahsilatlarListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

}
