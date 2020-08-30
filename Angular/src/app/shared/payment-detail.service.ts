import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail= {
    CVV: null,
    CardNumber: null,
    CardOwnerName: null,
    ExpirationDate: null,
    PMId: null
  };
  
  constructor(private http:HttpClient) { }
  readonly rootUrl = 'http://localhost:50091/api';
  list : PaymentDetail[];
 
  postPaymentDetail(formData:PaymentDetail){ 
    return this.http.post(this.rootUrl+'/PaymentDetail',formData);
  } 
  putPaymentDetail(formData:PaymentDetail){ 
    return this.http.put(this.rootUrl+'/PaymentDetail/'+formData.PMId,formData);
  }  
  deletePaymentDetail(id:number){ 
    return this.http.delete(this.rootUrl+'/PaymentDetail/'+id);
  } 
  refreshList(){
    this.http.get(this.rootUrl + '/PaymentDetail')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
