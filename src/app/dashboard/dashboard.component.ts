import { Component, OnInit } from '@angular/core';
import { OrderDetails } from './interfaces/order-details';
import { ORDER_DETAILS } from './../mock-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public orderDetailsList: OrderDetails[] = ORDER_DETAILS;
  public orderStatusMapping = {1: 'Order Received', 2: 'Preparing', 3: 'Ready to Serve'};
  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Updates the order status on click of change status button
   * @param orderIndex Index of order item to be changed
   * @param currentOrderStatus current status of the order
   */
  updateOrderStatus(orderIndex: number, currentOrderStatus: number) {
    if (currentOrderStatus < 3) {
      this.orderDetailsList[orderIndex].status = currentOrderStatus + 1;
    } else {
      this.orderDetailsList[orderIndex].status = 1;
    }
  }

  /**
   * Navigates to order details screen for respective order id
   * @param orderId Order Id for which details need to be displayed
   */
  viewOrderDetails(orderId: number) {
    this.router.navigate(['/details', orderId]);
  }
}
