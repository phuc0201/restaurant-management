export enum TotalValueCardType {
  ORDERS = 'Orders',
  REVIEW = 'Reviews',
  PRODUCTS = 'Products',
  TOTAL_REVENUE = 'Total revenue'
}


export enum CampaignUserGroup {
  ALL_CUSTOMER = 'ALL_CUSTOMER'
}

export enum CampaignScopeType {
  ORDER = 'ORDER',
  ITEMS = 'ITEMS',
  CATEGORY = 'CATEGORY'
}

export enum CampaignDiscountType {
  PERCENTAGE = 'PERCENTAGE',
  DELIVERY = 'DELIVERY',
  TRANSPORT = 'TRANSPORT',
  NET = 'NET'
}

export enum CurrencyCode {
  VND = 'VND',
  USD = 'USD'
}

export enum OrderStatus {
  PENDING_CONFIRM = "PENDING_CONFIRM",
  ALLOCATING = "ALLOCATING",
  PENDING_PICKUP = "PENDING_PICKUP",
  PICKING_UP = "PICKING_UP",
  PENDING_DROP_OFF = "PENDING_DROP_OFF",
  DROPPING_OFF = "DROPPING_OFF",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  PROGRESSING = "PROGRESSING"
}

export enum PaymentMethod {
  CASH = "CASH",
  VNPAY = "VNPAY",
  GOP_Wallet = "GOP_Wallet"
}

export enum BillStatus {
  PENDING = "PENDING", // initial status của cash order
  PAID = "PAID", // status của VNPAY order
  COMPLETED = "COMPLETED", // status của order khi đã hoàn thành
  CANCELLED = "CANCELLED" // status của order khi bị hủy
}

export enum OrderType {
  DELIVERY = "DeliveryOrder",
  TRANSPORT = "TransportOrder"
}

export enum RoleType {
  CUSTOMER = "CUSTOMER",
  DRIVER = "DRIVER",
  RESTAURANT = "RESTAURANT",
  ADMIN = "ADMIN"
}

export enum RestaurantStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED"
}

export enum IconMarker {
  RESTAURANT = 'assets/img/icons/restaurant.png',
  CUSTOMER = 'assets/img/icons/pin-map.png'
}

