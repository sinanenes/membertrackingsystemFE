import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-izin',
  templateUrl: './show-izin.component.html',
  styleUrls: ['./show-izin.component.css']
})
export class ShowIzinComponent implements OnInit {

  constructor(private service:SharedService) { }

  IzinlerList: any = [];

  ModalTitle: string = "";
  ActivateAddEditIzinComp: boolean = false;
  izin: any;

  IzinIdFilter: string = "";
  IzinlerListWithoutFilter: any = [];


  ngOnInit(): void {
    this.refreshIzinlerList();
  }

  addClick() {
    this.izin = {
      IzinId: 0,
      KisiId:0,
      BaslangicTarih: "",
      BitisTarih: "",
      Aciklama: ""
    }
    this.ModalTitle = "Izin Ekle";
    this.ActivateAddEditIzinComp = true;

  }

  editClick(item: any) {
    this.izin = item;
    this.ModalTitle = "Izin Duzelt";
    this.ActivateAddEditIzinComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Emin misiniz?')) {
      this.service.deleteIzin(item.IzinId).subscribe(data => {
        alert(data.toString());
        this.refreshIzinlerList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditIzinComp = false;
    this.refreshIzinlerList();
  }


  refreshIzinlerList() {
    this.service.getIzinlerList().subscribe(data => {
      this.IzinlerList = data;
      this.IzinlerListWithoutFilter = data;
    });
  }

  filterFn() {
    var IzinIdFilter = this.IzinIdFilter;
    this.IzinlerList = this.IzinlerListWithoutFilter.filter(function (el: any) {
      return el.IzinId.toString().toLowerCase().includes(IzinIdFilter.toString().trim().toLowerCase())
    });
  }

  sortResult(prop: any, asc: any) {
    this.IzinlerList = this.IzinlerListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }  

}
