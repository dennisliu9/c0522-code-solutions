var orderHistory = [
  {
    orderInfo: {
      orderNumber: '114-3941689-8772232',
      orderDetailsLink: 'https:www.amazon.com/my-orders/114-3941689-8772232/details',
      orderInvoiceLink: 'https:www.amazon.com/my-orders/114-3941689-8772232/invoice',
      orderPlacedDate: '2020-08-04',
      orderTotal: 34.00, // Maybe this should be nested further to include currency
      orderShipTo: {
        shipToName: 'JS Masher',
        shipToLink: 'https://www.amazon.com/my-addresses/js-masher'
      },
      orderDelivery: {
        orderStatus: 'Delivered',
        orderDeliveryDate: '2020-08-08', // Holds estimated delivery date until actually delivered
        note: null
      },
      getProductSupport: {
        hasEligibleItem: false,
        productSupportLink: null
      },
      writeProductReview: 'https://www.amazon.com/my-orders/114-3941689-8772232/write-review'
    },
    orderItems: [
      {
        itemName: 'Javascript for inpatient programmers',
        itemUrl: 'https://www.amazon.com/products/javascript-for-inpat.html',
        itemImg: 'https://www.amazon.com/products/javascript-for-inpat.jpg',
        itemType: {
          // Potentially more types of items that need special display values
          isBook: true,
          bookAuthor: 'Rauschmayer, Dr. Axel'
        },
        itemReturnInfo: {
          isReturnWindowClosed: true,
          lastReturnDate: '2020-09-07'
        },
        itemPrice: 31.55, // Maybe should be nested further in include pre- and post- sales prices?
        itemBuyAgainLink: 'https:www.amazon.com/my-orders/114-3941689-8772232/item-0/buy-again.html',
        itemViewLink: 'https:www.amazon.com/my-orders/114-3941689-8772232/details/item-0/view-detail.html'
      }
    ]
  },
  {
    orderInfo: {
      orderNumber: '113-9984268-1280257',
      orderDetailsLink: 'url-like-above',
      orderInvoiceLink: 'url-like-above',
      orderPlacedDate: '2020-07-19',
      orderTotal: 44.53,
      orderShipTo: {
        shipToName: 'JS Masher',
        shipToLink: 'url-like-above'
      },
      orderDelivery: {
        status: 'Delivered',
        deliveryDate: '2020-07-20',
        note: 'Your package was delivered. It was handed directly to a resident.'
      },
      getProductSupport: {
        hasEligibleItem: false,
        productSupportLink: null
      },
      writeProductReview: 'https://www.amazon.com/my-orders/113-9984268-1280257/write-review'
    },
    orderItems: [
      {
        itemName: 'The Timeless Way of Building',
        itemUrl: 'https://www.amazon.com/products/the-timeless-way-o.html',
        itemImg: 'url-like-above',
        itemType: {
          isBook: true,
          bookAuthor: 'Alexander, Christopher'
        },
        itemReturnInfo: {
          isReturnWindowClosed: true,
          lastReturnDate: '2020-08-19'
        },
        itemPrice: 41.33,
        itemBuyAgainLink: 'url-like-above',
        itemViewLink: 'url-like-above'
      }
    ]
  },
  {
    orderInfo: {
      orderNumber: '114-2875557-9059409',
      orderDetailsLink: 'url-like-above',
      orderInvoiceLink: 'url-like-above',
      orderPlacedDate: '2020-07-04',
      orderTotal: 17.22,
      orderShipTo: {
        shipToName: 'JS Masher',
        shipToLink: 'https://www.amazon.com/my-addresses/js-masher'
      },
      orderDelivery: {
        status: 'Delivered',
        deliveryDate: '2020-07-07',
        note: 'Your package was delivered. It was handed directly to a resident.'
      },
      getProductSupport: {
        hasEligibleItem: false,
        productSupportLink: null
      },
      writeProductReview: 'https://www.amazon.com/my-orders/114-2875557-9059409/write-review'
    },
    orderItems: [
      {
        itemName: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        itemUrl: 'https://www.amazon.com/products/gamecube-controller-adapter-super-sma.html',
        itemImg: 'url-like-above',
        itemType: {
          isBook: false,
          bookAuthor: null
        },
        itemReturnInfo: {
          isReturnWindowClosed: true,
          lastReturnDate: '2020-08-05'
        },
        itemPrice: 15.98,
        itemBuyAgainLink: 'url-like-above',
        itemViewLink: 'url-like-above'
      }
    ]
  },
  {
    orderInfo: {
      orderNumber: '113-2883177-2648248',
      orderDetailsLink: 'url-like-above',
      orderInvoiceLink: 'url-like-above',
      orderPlacedDate: '2020-07-03',
      orderTotal: 138.93,
      orderShipTo: {
        shipToName: 'JS Masher',
        shipToLink: 'https://www.amazon.com/my-addresses/js-masher'
      },
      orderDelivery: {
        status: 'Delivered',
        deliveryDate: '2020-07-05',
        note: null
      },
      getProductSupport: {
        hasEligibleItem: true,
        productSupportLink: 'https://www.amazon.com/my-orders/113-2883177-2648248/get-product-support'
      },
      writeProductReview: 'https://www.amazon.com/my-orders/113-2883177-2648248/write-review'
    },
    orderItems: [
      {
        itemName: 'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        itemUrl: 'https://www.amazon.com/products/gamecube-controller---super-smash-bro.html',
        itemImg: 'url-like-above',
        itemType: {
          isBook: false,
          bookAuthor: null
        },
        itemReturnInfo: {
          isReturnWindowClosed: true,
          lastReturnDate: '2020-08-04'
        },
        itemPrice: 94.95,
        itemBuyAgainLink: 'url-like-above',
        itemViewLink: 'url-like-above'
      },
      {
        itemName: 'The Art of SQL',
        itemUrl: 'https://www.amazon.com/products/the-art-of-sql.html',
        itemImg: 'url-like-above',
        itemType: {
          isBook: true,
          bookAuthor: 'Faroult, Stephane'
        },
        itemReturnInfo: {
          isReturnWindowClosed: true,
          lastReturnDate: '2020-08-04'
        },
        itemPrice: 33.99,
        itemBuyAgainLink: 'url-like-above',
        itemViewLink: 'url-like-above'
      }
    ]
  }
];
