import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-kurskayituye',
  templateUrl: './show-kurskayituye.component.html',
  styleUrls: ['./show-kurskayituye.component.css']
})
export class ShowKurskayituyeComponent implements OnInit {

  constructor(private service: SharedService) { }
  KursKayitUyelerList: any = [];

  ModalTitle: string = "";
  ActivateAddEditKursKayitUyeComp: boolean = false;
  kurskayituye: any;

  KursKayitUyeIdFilter: string = "";
  KursKayitUyelerListWithoutFilter: any = [];


  ngOnInit(): void {
    this.refreshKursKayitUyelerList();
  }

  addClick() {
    this.kurskayituye = {
      KursKayitUyeId: 0,
      KursId: 0,
      UyeId: 0,
      BaslangicTarih: "",
      BitisTarih: ""
    }
    this.ModalTitle = "Kurs Kayıt Uye Ekle";
    this.ActivateAddEditKursKayitUyeComp = true;

  }

  editClick(item: any) {
    this.kurskayituye = item;
    this.ModalTitle = "Kurs Kayıt Uye Duzelt";
    this.ActivateAddEditKursKayitUyeComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Emin misiniz?')) {
      this.service.deleteKursKayitUye(item.KursKayitUyeId).subscribe(data => {
        alert(data.toString());
        this.refreshKursKayitUyelerList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditKursKayitUyeComp = false;
    this.refreshKursKayitUyelerList();
  }


  refreshKursKayitUyelerList() {
    this.service.getKursKayitUyelerList().subscribe(data => {
      this.KursKayitUyelerList = data;
      this.KursKayitUyelerListWithoutFilter = data;
    });
  }

  filterFn() {
    var KursKayitUyeIdFilter = this.KursKayitUyeIdFilter;
    this.KursKayitUyelerList = this.KursKayitUyelerListWithoutFilter.filter(function (el: any) {
      return el.KursKayitUyeId.toString().toLowerCase().includes(KursKayitUyeIdFilter.toString().trim().toLowerCase())
    });
  }

  sortResult(prop: any, asc: any) {
    this.KursKayitUyelerList = this.KursKayitUyelerListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

}
