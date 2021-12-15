import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-kod',
  templateUrl: './add-edit-kod.component.html',
  styleUrls: ['./add-edit-kod.component.css']
})
export class AddEditKodComponent implements OnInit {

  constructor(private service: SharedService) { }
  
  @Input() kod: any;
  KodId: string = "";
  KodAdi: string = "";
  KodDeger: string = "";
  KodGrup: string = "";
  
  ngOnInit(): void {
    this.KodId = this.kod.KodId;
    this.KodAdi = this.kod.KodAdi;
    this.KodDeger = this.kod.KodDeger;
    this.KodGrup = this.kod.KodGrup;
  }

  addKod() {
    var val = {
      KodId: this.KodId,
      KodAdi: this.KodAdi,
      KodDeger: this.KodDeger,
      KodGrup: this.KodGrup
    };

    this.service.addKod(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateKod() {
    var val = {
      KodId: this.KodId,
      KodAdi: this.KodAdi,
      KodDeger: this.KodDeger,
      KodGrup: this.KodGrup
    };
    this.service.updateKod(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
