import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-kullanici',
  templateUrl: './show-kullanici.component.html',
  styleUrls: ['./show-kullanici.component.css']
})
export class ShowKullaniciComponent implements OnInit {

  constructor(private service: SharedService) { }

  KullanicilarList: any = [];

  ModalTitle: string = "";
  ActivateAddEditKullaniciComp: boolean = false;
  kullanici: any;

  KullaniciIdFilter: string = "";
  KullaniciAdiFilter: string = "";
  KullanicilarListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshKullanicilarList();
  }
  addClick() {
    this.kullanici = {
      KullaniciId: 0,
      KullaniciAdi: "",
      KullaniciTipiKod: 1,
      AktifPasifKod: 1
    }
    this.ModalTitle = "Kullanici Ekle";
    this.ActivateAddEditKullaniciComp = true;

  }

  editClick(item: any) {
    this.kullanici = item;
    this.ModalTitle = "Kullanici Duzelt";
    this.ActivateAddEditKullaniciComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Emin misiniz?')) {
      this.service.deleteKullanici(item.KullaniciId).subscribe(data => {
        alert(data.toString());
        this.refreshKullanicilarList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditKullaniciComp = false;
    this.refreshKullanicilarList();
  }


  refreshKullanicilarList() {
    this.service.getKullanicilarList().subscribe(data => {
      this.KullanicilarList = data;
      this.KullanicilarListWithoutFilter = data;
    });
  }

  filterFn() {
    var KullaniciIdFilter = this.KullaniciIdFilter;
    var KullaniciAdiFilter = this.KullaniciAdiFilter;
    this.KullanicilarList = this.KullanicilarListWithoutFilter.filter(function (el: any) {
      return el.KullaniciId.toString().toLowerCase().includes(KullaniciIdFilter.toString().trim().toLowerCase()) &&
        el.KullaniciAdi.toString().toLowerCase().includes(KullaniciAdiFilter.toString().trim().toLowerCase())
    });
  }

  sortResult(prop: any, asc: any) {
    this.KullanicilarList = this.KullanicilarListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }
}

