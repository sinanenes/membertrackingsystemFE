import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-kurs',
  templateUrl: './show-kurs.component.html',
  styleUrls: ['./show-kurs.component.css']
})
export class ShowKursComponent implements OnInit {

  constructor(private service:SharedService) { }

  KurslarList: any = [];

  ModalTitle: string = "";
  ActivateAddEditKursComp: boolean = false;
  kurs: any;

  KursIdFilter: string = "";
  KursAdiFilter: string = "";
  KurslarListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshKurslarList();
  }

  addClick() {
    this.kurs = {
      KursId: 0,
      KursAdi: "",
      KursTurKod: "",
      BaslangicTarih:"" ,
      BitisTarih: "",
      Kapasite: 0,
      KursUcret: 0,
      EgitmenId: 0
    }
    this.ModalTitle = "Kurs Ekle";
    this.ActivateAddEditKursComp = true;

  }

  editClick(item: any) {
    this.kurs = item;
    this.ModalTitle = "Kurs Duzelt";
    this.ActivateAddEditKursComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Emin misiniz?')) {
      this.service.deleteKurs(item.KursId).subscribe(data => {
        alert(data.toString());
        this.refreshKurslarList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditKursComp = false;
    this.refreshKurslarList();
  }


  refreshKurslarList() {
    this.service.getKurslarList().subscribe(data => {
      this.KurslarList = data;
      this.KurslarListWithoutFilter = data;
    });
  }

  filterFn() {
    var KursIdFilter = this.KursIdFilter;
    var KursAdiFilter = this.KursAdiFilter;
    this.KurslarList = this.KurslarListWithoutFilter.filter(function (el: any) {
      return el.KursId.toString().toLowerCase().includes(KursIdFilter.toString().trim().toLowerCase()) &&
        el.KursAdi.toString().toLowerCase().includes(KursAdiFilter.toString().trim().toLowerCase())
    });
  }

  sortResult(prop: any, asc: any) {
    this.KurslarList = this.KurslarListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

}
