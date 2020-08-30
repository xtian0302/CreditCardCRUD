import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [
  ]
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service:PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  resetForm(form?:NgForm){
    if(form!=null) 
      form.resetForm();

    this.service.formData = {
        PMId:0,
        CardOwnerName:'',
        CardNumber:'',
        ExpirationDate:'', 
        CVV:''
    }
  }
  onSubmit(form:NgForm){
    if(form.value.PMId == 0||form.value.PMId == undefined){
        this.insertRecord(form);
    }else{
        this.updateRecord(form);
    }
    
  }
  insertRecord(form:NgForm){
    this.service.postPaymentDetail(form.value).subscribe( 
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Submitted Succesfully", "Payment Detail Register")
      },
      err=>{
        console.log(err);
      }
    );
  }
  updateRecord(form:NgForm){
    this.service.putPaymentDetail(form.value).subscribe( 
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Updated Succesfully", "Payment Detail Register")
      },
      err=>{
        console.log(err);
      }
    );
  }
}
