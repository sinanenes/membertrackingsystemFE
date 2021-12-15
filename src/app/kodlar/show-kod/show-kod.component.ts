import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-kod',
  templateUrl: './show-kod.component.html',
  styleUrls: ['./show-kod.component.css']
})
export class ShowKodComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  KodlarList: any = [];

  ModalTitle: string = "";
  ActivateAddEditKodComp: boolean = false;
  kod: any;

  KodIdFilter: string = "";
  KodAdiFilter: string = "";
  KodlarListWithoutFilter: any = [];
  ngOnInit(): void {
    this.refreshKodlarList();
  }

  addClick() {
    this.kod = {
      KodId: 0,
      KodAdi: "",
      KodDeger: "",
      KodGrup: ""
    }
    this.ModalTitle = "Kod Ekle";
    this.ActivateAddEditKodComp = true;

  }

  editClick(item: any) {
    this.kod = item;
    this.ModalTitle = "Kod Duzelt";
    this.ActivateAddEditKodComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Emin misiniz?')) {
      this.service.deleteKod(item.KodId).subscribe(data => {
        alert(data.toString());
        this.refreshKodlarList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditKodComp = false;
    this.refreshKodlarList();
  }


  refreshKodlarList() {
    this.service.getKodlarList().subscribe(data => {
      this.KodlarList = data;
      this.KodlarListWithoutFilter = data;
    });
  }

  filterFn() {
    var KodIdFilter = this.KodIdFilter;
    var KodAdiFilter = this.KodAdiFilter;
    this.KodlarList = this.KodlarListWithoutFilter.filter(function (el: any) {
      return el.KodId.toString().toLowerCase().includes(KodIdFilter.toString().trim().toLowerCase()) &&
        el.KodAdi.toString().toLowerCase().includes(KodAdiFilter.toString().trim().toLowerCase())
    });
  }

  sortResult(prop: any, asc: any) {
    this.KodlarList = this.KodlarListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }
}