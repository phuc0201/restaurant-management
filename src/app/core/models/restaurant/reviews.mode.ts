export class ReviewFoodItem {
  owner_id?: string = '';
  content: string = '';
  rating: number = 0;
  createdAt: string = '';
  customerInfo?: CustomerInfo;
}
class CustomerInfo {
  _id: string = '';
  full_name: string = '';
  avatar: string = '';
}
