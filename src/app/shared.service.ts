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
  getIzinlerList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Izinler');
  }

  addIzin(val: any) {
    return this.http.post(this.APIUrl + '/Izinler', val);
  }

  updateIzin(val: any) {
    return this.http.put(this.APIUrl + '/Izinler', val);
  }

  deleteIzin(val: any) {
    return this.http.delete(this.APIUrl + '/Izinler/' + val);
  }

  getKasaBankalarList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/KasaBankalar');
  }

  addKasaBanka(val: any) {
    return this.http.post(this.APIUrl + '/KasaBankalar', val);
  }

  updateKasaBanka(val: any) {
    return this.http.put(this.APIUrl + '/KasaBankalar', val);
  }

  deleteKasaBanka(val: any) {
    return this.http.delete(this.APIUrl + '/KasaBankalar/' + val);
  }

  getKodlarList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Kodlar');
  }

  addKod(val: any) {
    return this.http.post(this.APIUrl + '/Kodlar', val);
  }

  updateKod(val: any) {
    return this.http.put(this.APIUrl + '/Kodlar', val);
  }

  deleteKod(val: any) {
    return this.http.delete(this.APIUrl + '/Kodlar/' + val);
  }

  getKullanicilarList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Kullanicilar');
  }
  getKullaniciByKullaniciAdiParolaList(val1:any,val2:any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Kullanicilar/'+ val1+'/'+ val2);
  }
  addKullanici(val: any) {
    return this.http.post(this.APIUrl + '/Kullanicilar', val);
  }

  updateKullanici(val: any) {
    return this.http.put(this.APIUrl + '/Kullanicilar', val);
  }

  deleteKullanici(val: any) {
    return this.http.delete(this.APIUrl + '/Kullanicilar/' + val);
  }
  getKursKayitUyelerList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/KursKayitUyeler');
  }

  addKursKayitUye(val: any) {
    return this.http.post(this.APIUrl + '/KursKayitUyeler', val);
  }

  updateKursKayitUye(val: any) {
    return this.http.put(this.APIUrl + '/KursKayitUyeler', val);
  }

  deleteKursKayitUye(val: any) {
    return this.http.delete(this.APIUrl + '/KursKayitUyeler/' + val);
  }
  getOdemelerList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Odemeler');
  }

  addOdeme(val: any) {
    return this.http.post(this.APIUrl + '/Odemeler', val);
  }

  updateOdeme(val: any) {
    return this.http.put(this.APIUrl + '/Odemeler', val);
  }

  deleteOdeme(val: any) {
    return this.http.delete(this.APIUrl + '/Odemeler/' + val);
  }  
  getSorularList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Sorular');
  }

  addSoru(val: any) {
    return this.http.post(this.APIUrl + '/Sorular', val);
  }

  updateSoru(val: any) {
    return this.http.put(this.APIUrl + '/Sorular', val);
  }

  deleteSoru(val: any) {
    return this.http.delete(this.APIUrl + '/Sorular/' + val);
  }  

  getTahsilatlarList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Tahsilatlar');
  }

  addTahsilat(val: any) {
    return this.http.post(this.APIUrl + '/Tahsilatlar', val);
  }

  updateTahsilat(val: any) {
    return this.http.put(this.APIUrl + '/Tahsilatlar', val);
  }

  deleteTahsilat(val: any) {
    return this.http.delete(this.APIUrl + '/Tahsilatlar/' + val);
  }  

}
