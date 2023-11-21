var db = require('../../services/mysql');

exports.getAllPoroducts = (req,res,next)=>{
    db.query("SELECT * FROM products").then(([rows,fields])=>{
        res.status(200).send(rows);
    }).catch((err)=>{
      res.status(404).send(err.message)
    });
}
exports.getProduct = (req,res,next)=>{
    const {id} = req.params
    const query = `
      SELECT * FROM products WHERE id = ?
    `
    db.query(query,[id]).then(([rows,fields])=>{
        res.status(200).send(rows);
    }).catch((err)=>{
      res.status(404).send(err.message)
    });
}
exports.createProduct = (req,res,next)=>{
    const {name, description, price} = req.params
    const query = `
      INSERT INTO product(name,description,price) values(?,?,?)
    `
    db.query(query,[name,description,price]).then(([rows,fields])=>{
        res.status(201).send(rows);
    }).catch((err)=>{
      res.status(404).send(err.message)
    });
}
exports.dispenceProduct = (req,res,next)=>{
    const {id, quantity} = req.params
    const query = `
      UPDATE products SET quantity = ?
      WHERE id = ?
    `
    db.query(query,[quantity, id]).then(([rows,fields])=>{
        res.status(200).send(rows);
    }).catch((err)=>{
      res.status(404).send(err.message)
    });
}

exports.deleteProduct  = (req,res,next)=>{
    const {id} = req.params
    const query = `
      DELETE FROM products WHERE id = ?
    `
    db.query(query,[id]).then(([rows,fields])=>{
        res.status(201).send('deleted');
    }).catch((err)=>{
      res.status(404).send(err.message)
    });
}

