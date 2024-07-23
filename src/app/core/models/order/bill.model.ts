import { BillStatus, PaymentMethod } from "../../utils/enum";

export class Bill {
  _id: string = 'bill_01';
  status: BillStatus = BillStatus.PENDING;
  order?: string = 'order_01';
  payment_method: PaymentMethod = PaymentMethod.CASH;
  transaction_id?: string = '';
  campaign_id: string[] = [];
  total: number = 0;
  sub_total: number = 0;
  discount: number = 0;
  platform_fee: number = 2000; //default
}
