import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-borc',
  templateUrl: './show-borc.component.html',
  styleUrls: ['./show-borc.component.css']
})
export class ShowBorcComponent implements OnInit {

  constructor(private service:SharedService) { }

  BorclarList: any = [];

  ModalTitle: string = "";
  ActivateAddEditBorcComp: boolean = false;
  borc: any;

  BorcIdFilter: string = "";
  KisiIdFilter: string = "";
  BorclarListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshBorclarList();
  }

  addClick() {
    this.borc = {
      BorcId:0,
      KisiId: 0,
      BorcTarih: "",
      DonemAyKod:"",
      DonemYilKod:"",
      BorcTurKod: "",
      BorcTutar: 0,
      Aciklama:""
    }
    this.ModalTitle = "Borc Ekle";
    this.ActivateAddEditBorcComp = true;

  }

  editClick(item: any) {
    this.borc = item;
    this.ModalTitle = "Borc Duzelt";
    this.ActivateAddEditBorcComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Emin misiniz?')) {
      this.service.deleteBorc(item.BorcId).subscribe(data => {
        alert(data.toString());
        this.refreshBorclarList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditBorcComp = false;
    this.refreshBorclarList();
  }


  refreshBorclarList() {
    this.service.getBorclarList().subscribe(data => {
      this.BorclarList = data;
      this.BorclarListWithoutFilter = data;
    });
  }

  filterFn() {
    var BorcIdFilter = this.BorcIdFilter;
    var KisiIdFilter = this.KisiIdFilter;
    this.BorclarList = this.BorclarListWithoutFilter.filter(function (el: any) {
      return el.BorcId.toString().toLowerCase().includes(BorcIdFilter.toString().trim().toLowerCase()) &&
        el.KisiId.toString().toLowerCase().includes(KisiIdFilter.toString().trim().toLowerCase())
    });
  }

  sortResult(prop: any, asc: any) {
    this.BorclarList = this.BorclarListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

}
