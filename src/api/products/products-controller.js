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
exports.updateProduct = (req,res,next)=>{
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
        res.status(200).send('deleted');
    }).catch((err)=>{
      res.status(404).send(err.message)
    });
}

