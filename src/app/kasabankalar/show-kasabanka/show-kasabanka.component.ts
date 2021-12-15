import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-kasabanka',
  templateUrl: './show-kasabanka.component.html',
  styleUrls: ['./show-kasabanka.component.css']
})
export class ShowKasabankaComponent implements OnInit {

  constructor(private service:SharedService) { }

  KasaBankalarList: any = [];

  ModalTitle: string = "";
  ActivateAddEditKasaBankaComp: boolean = false;
  kasabanka: any;

  KasaBankaIdFilter: string = "";
  KasaBankaAdiFilter: string = "";
  KasaBankalarListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshKasaBankalarList();
  }
  addClick() {
    this.kasabanka = {
      KasaBankaId: 0,
      KasaBankaAdi: "",
      KasaBankaTurKod: 1,
      Aciklama:""
    }
    this.ModalTitle = "Kasa Banka Ekle";
    this.ActivateAddEditKasaBankaComp = true;

  }

  editClick(item: any) {
    this.kasabanka = item;
    this.ModalTitle = "Kasa Banka Duzelt";
    this.ActivateAddEditKasaBankaComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Emin misiniz?')) {
      this.service.deleteKasaBanka(item.KasaBankaId).subscribe(data => {
        alert(data.toString());
        this.refreshKasaBankalarList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditKasaBankaComp = false;
    this.refreshKasaBankalarList();
  }


  refreshKasaBankalarList() {
    this.service.getKasaBankalarList().subscribe(data => {
      this.KasaBankalarList = data;
      this.KasaBankalarListWithoutFilter = data;
    });
  }

  filterFn() {
    var KasaBankaIdFilter = this.KasaBankaIdFilter;
    var KasaBankaAdiFilter = this.KasaBankaAdiFilter;
    this.KasaBankalarList = this.KasaBankalarListWithoutFilter.filter(function (el: any) {
      return el.KasaBankaId.toString().toLowerCase().includes(KasaBankaIdFilter.toString().trim().toLowerCase()) &&
        el.KasaBankaAdi.toString().toLowerCase().includes(KasaBankaAdiFilter.toString().trim().toLowerCase())
    });
  }

  sortResult(prop: any, asc: any) {
    this.KasaBankalarList = this.KasaBankalarListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }
}
