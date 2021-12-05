import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-bilgilendirme',
  templateUrl: './show-bilgilendirme.component.html',
  styleUrls: ['./show-bilgilendirme.component.css']
})
export class ShowBilgilendirmeComponent implements OnInit {

  constructor(private service:SharedService) { }

  BilgilendirmelerList: any = [];

  ModalTitle: string = "";
  ActivateAddEditBilgilendirmeComp: boolean = false;
  bilgilendirme: any;

  BilgilendirmeIdFilter: string = "";
  BilgilendirmelerListWithoutFilter: any = [];


  ngOnInit(): void {
    this.refreshBilgilendirmelerList();
  }

  addClick() {
    this.bilgilendirme = {
      BilgilendirmeId: 0,
      BilgilendirmeMetni: "",
      BaslangicTarih: "",
      BitisTarih: "",
      Aciklama:""
    }
    this.ModalTitle = "Bilgilendirme Ekle";
    this.ActivateAddEditBilgilendirmeComp = true;

  }

  editClick(item: any) {
    this.bilgilendirme = item;
    this.ModalTitle = "Bilgilendirme Duzelt";
    this.ActivateAddEditBilgilendirmeComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Emin misiniz?')) {
      this.service.deleteBilgilendirme(item.BilgilendirmeId).subscribe(data => {
        alert(data.toString());
        this.refreshBilgilendirmelerList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditBilgilendirmeComp = false;
    this.refreshBilgilendirmelerList();
  }


  refreshBilgilendirmelerList() {
    this.service.getBilgilendirmelerList().subscribe(data => {
      this.BilgilendirmelerList = data;
      this.BilgilendirmelerListWithoutFilter = data;
    });
  }

  filterFn() {
    var BilgilendirmeIdFilter = this.BilgilendirmeIdFilter;
    this.BilgilendirmelerList = this.BilgilendirmelerListWithoutFilter.filter(function (el: any) {
      return el.BilgilendirmeId.toString().toLowerCase().includes(BilgilendirmeIdFilter.toString().trim().toLowerCase())
    });
  }

  sortResult(prop: any, asc: any) {
    this.BilgilendirmelerList = this.BilgilendirmelerListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }


}
