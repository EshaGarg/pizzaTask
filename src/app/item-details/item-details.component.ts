import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITEM_DETAILS } from '../mock-details';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  public orderDetails: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getOrderId();
  }

  /**
   * Fetched the order Id from the url
   */
  getOrderId() {
    this.activatedRoute.paramMap.subscribe(params => {
      const ID = parseInt(params.get('id'), 10);
      this.getOrderDetails(ID);
    },
    error => {
      console.error(error);
      alert('Something went wrong. Please try again');
    });
  }

  /**
   * Fetches the order details with specified order id
   * @param orderId Order Id for which details are required
   */
  getOrderDetails(orderId: number) {
    this.orderDetails = ITEM_DETAILS[orderId];
    if (!this.orderDetails) {
      alert('Details cannot be fetched for this order.');
      this.goBack();
    }
  }

  /**
   * Redirects to dashboard page
   */
  goBack() {
    this.router.navigate(['/dashboard']);
  }

}
