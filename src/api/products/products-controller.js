var db = require('../../services/mysql');

exports.getAllPoroducts = ()=>{
    return [
      {
        id: '1',
        name: 'Coke',
        price: 20,
        image:
          'https://toppng.com/uploads/preview/coke-free-desktop-115385941292ptblrvxaz.png',
        stock: 10,
      },
      {
        id: '2',
        name: 'Pepsi',
        price: 25,
        image:
          'https://toppng.com/uploads/preview/pepsi-11538681711xinb1lyzap.png',
        stock: 10,
      },
      {
        id: '3',
        name: 'Dew',
        price: 30,
        image:
          'https://toppng.com/uploads/preview/mountain-dew-image-11526062217u23bq6aak8.png',
        stock: 10,
      },
    ]
}