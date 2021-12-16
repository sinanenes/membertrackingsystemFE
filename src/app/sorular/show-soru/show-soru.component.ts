import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-soru',
  templateUrl: './show-soru.component.html',
  styleUrls: ['./show-soru.component.css']
})
export class ShowSoruComponent implements OnInit {

  constructor(private service: SharedService) { }

  SorularList: any = [];

  ModalTitle: string = "";
  ActivateAddEditSoruComp: boolean = false;
  soru: any;

  SoruIdFilter: string = "";
  KullaniciIdFilter: string = "";
  SorularListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshSorularList();
  }

  addClick() {
    this.soru = {
      SoruId: 0,
      KullaniciId: 0,
      SoruTarih: "",
      CevapTarih: "",
      SoruMetni: "",
      CevapMetni: "",
      CevaplayanId: 0
    }
    this.ModalTitle = "Soru Ekle";
    this.ActivateAddEditSoruComp = true;

  }

  editClick(item: any) {
    this.soru = item;
    this.ModalTitle = "Soru Duzelt";
    this.ActivateAddEditSoruComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Emin misiniz?')) {
      this.service.deleteSoru(item.SoruId).subscribe(data => {
        alert(data.toString());
        this.refreshSorularList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditSoruComp = false;
    this.refreshSorularList();
  }


  refreshSorularList() {
    this.service.getSorularList().subscribe(data => {
      this.SorularList = data;
      this.SorularListWithoutFilter = data;
    });
  }

  filterFn() {
    var SoruIdFilter = this.SoruIdFilter;
    var KullaniciIdFilter = this.KullaniciIdFilter;
    this.SorularList = this.SorularListWithoutFilter.filter(function (el: any) {
      return el.SoruId.toString().toLowerCase().includes(SoruIdFilter.toString().trim().toLowerCase()) &&
        el.KullaniciId.toString().toLowerCase().includes(KullaniciIdFilter.toString().trim().toLowerCase())
    });
  }

  sortResult(prop: any, asc: any) {
    this.SorularList = this.SorularListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

}