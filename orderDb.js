function getOrderTime(diff){
  var currentDate = new Date()
  currentDate.setTime(currentDate.getTime() + (diff*60000));
  return currentDate;
}

exports.orderDb = [
  {
    orderId: 'OR100001',
    productList: [
      {
        productId: 'PR100001',
        productName: 'product1',
        quantity: '2'
      }
    ],
    orderPlacementDate: 'November 17, 2017',
    value: '20 £',
    status: 'closed',
    shipped: 'false',
    deliveryTime: getOrderTime(30)
  },
  {
    orderId: 'OR100002',
    productList: [
      {
        productId: 'PR100001',
        productName: 'product1',
        quantity: '2'
      },
      {
        productId: 'PR100004',
        productName: 'product4',
        quantity: '1'
      }
    ],
    orderPlacementDate: 'November 18, 2017',
    value: '35 £',
    status: 'closed',
    shipped: 'false',
    deliveryTime: getOrderTime(40)
  },
  {
    orderId: 'OR100003',
    productList: [
      {
        productId: 'PR100002',
        productName: 'product2',
        quantity: '3'
      }
    ],
    orderPlacementDate: 'November 19, 2017',
    value: '15 £',
    status: 'closed',
    shipped: 'false',
    deliveryTime: getOrderTime(25)
  },
  {
    orderId: 'OR100004',
    productList: [
      {
        productId: 'PR100001',
        productName: 'product1',
        quantity: '4'
      }
    ],
    orderPlacementDate: 'November 20, 2017',
    value: '40 £',
    status: 'open',
    shipped: 'true',
    deliveryTime: getOrderTime(30)
  },
  {
    orderId: 'OR100005',
    productList: [
      {
        productId: 'PR100001',
        productName: 'product1',
        quantity: '2'
      },
      {
        productId: 'PR100002',
        productName: 'product2',
        quantity: '3'
      },
      {
        productId: 'PR100003',
        productName: 'product3',
        quantity: '5'
      }
    ],
    orderPlacementDate: 'November 21, 2017',
    value: '90 £',
    status: 'open',
    shipped: 'false',
    deliveryTime: getOrderTime(50)
  }
]
