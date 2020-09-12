export const ORDER_DETAILS = [
    {
        orderId: 1223,
        customerName: 'Esha',
        totalItems: 1,
        totalAmount: 100.123,
        status: 1
    },
    {
        orderId: 1221,
        customerName: 'Arvind',
        totalItems: 3,
        totalAmount: 120.12345,
        status: 2
    },
    {
        orderId: 1123,
        customerName: 'Harsh',
        totalItems: 1,
        totalAmount: 50.1,
        status: 1
    },
    {
        orderId: 1253,
        customerName: 'Saurav',
        totalItems: 4,
        totalAmount: 500.12345,
        status: 2
    },
];

export const ITEM_DETAILS = {
    1253: {
        totalPrice: 500.12345,
        items: [
            {
                itemId: 1,
                itemName: 'Onion Pizza',
                itemQuantity: 1,
                itemPrice: 150
            },
            {
                itemId: 1,
                itemName: 'Garlic Bread',
                itemQuantity: 1,
                itemPrice: 120
            },
            {
                itemId: 1,
                itemName: 'Farmhouse Pizza',
                itemQuantity: 1,
                itemPrice: 200.1
            },
            {
                itemId: 1,
                itemName: 'Col drink',
                itemQuantity: 1,
                itemPrice: 30.4
            }
        ],
        customerName: 'Saurav',
        deliveryAddress: 'abcd'
    },
    1223: {
        totalPrice: 100.123,
        items: [
            {
                itemId: 1,
                itemName: 'Pizza',
                itemQuantity: 1,
                itemPrice: 100
            }
        ],
        customerName: 'Esha',
        deliveryAddress: 'Address'
    },
    1221: {
        totalPrice: 120.12345,
        items: [
            {
                itemId: 2,
                itemName: 'Cold drink',
                itemQuantity: 1,
                itemPrice: 40
            },
            {
                itemId: 3,
                itemName: 'Dip',
                itemQuantity: 1,
                itemPrice: 20
            },
            {
                itemId: 3,
                itemName: 'Pan Pizza',
                itemQuantity: 1,
                itemPrice: 60
            },
        ],
        customerName: 'Arvind',
        deliveryAddress: 'Lucknow'
    }
};

