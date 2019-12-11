import { Component, OnInit, Inject } from '@angular/core';
import { OrderProduct } from "../shared/OrderProduct";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-shopcart-add-modal',
  templateUrl: './shopcart-add-modal.component.html',
  styleUrls: ['./shopcart-add-modal.component.scss']
})
export class ShopcartAddModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ShopcartAddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public product: OrderProduct) { }

  ngOnInit() {
  }

  public addCount() {
    this.product.count += 1
  }
  public reduceCount() {
    if (this.product.count > 1) {
      this.product.count -= 1
      }
  }
  public onClose() {
    this.dialogRef.close();
  }
  public onSubmit() {
    this.dialogRef.close();
  }

}
