import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl ="http://localhost:5167/api";
  readonly PhotoUrl = "http://localhost:5167/Photos/"

  constructor(private http:HttpClient) { }

  getKisilerList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Kisiler');
  }

  addKisi(val:any){
    //alert(val.KisiId.toString() + "/" + val.KisiAdi.toString()+"***" + this.APIUrl + '/Kisiler');
    return this.http.post(this.APIUrl+'/Kisiler',val);
  }
  updateKisi(val: any) {
    //alert(val.KisiId.toString() + "/" + val.KisiAdi.toString()+"***" + this.APIUrl + '/Kisiler');
    return this.http.put(this.APIUrl + '/Kisiler', val);
  }
  deleteKisi(val: any) {
    return this.http.delete(this.APIUrl + '/Kisiler/'+ val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl + '/Kisiler/SaveFile',val);
  }

  getAllKisiTipleri():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'/Kisiler/GetAllKisiTipleri');
  }

  getAllEgitmenler(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Kisiler/GetAllEgitmenler');
  }

  getKurslarList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Kurslar');
  }
  
  addKurs(val: any) {
    return this.http.post(this.APIUrl + '/Kurslar', val);
  }

  updateKurs(val: any) {
    return this.http.put(this.APIUrl + '/Kurslar', val);
  }

  deleteKurs(val: any) {
    return this.http.delete(this.APIUrl + '/Kurslar/' + val);
  }

  getAllKursTurleri(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Kurslar/GetAllKursTurleri');
  }

  getBilgilendirmelerList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Bilgilendirmeler');
  }

  addBilgilendirme(val: any) {
    return this.http.post(this.APIUrl + '/Bilgilendirmeler', val);
  }

  updateBilgilendirme(val: any) {
    return this.http.put(this.APIUrl + '/Bilgilendirmeler', val);
  }

  deleteBilgilendirme(val: any) {
    return this.http.delete(this.APIUrl + '/Bilgilendirmeler/' + val);
  }

  getBorclarList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Borclar');
  }

  addBorc(val: any) {
    return this.http.post(this.APIUrl + '/Borclar', val);
  }

  updateBorc(val: any) {
    return this.http.put(this.APIUrl + '/Borclar', val);
  }

  deleteBorc(val: any) {
    return this.http.delete(this.APIUrl + '/Borclar/' + val);
  }
  
}
