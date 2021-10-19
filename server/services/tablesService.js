const tablesModel = require('../models/tablesModel');

async function getTables() { 
    return await tablesModel.find();
}

async function createTable(data) { 
    if(!data.tableName || !data.tableCapacity || !data.tableStatus) { 
        throw({message : "All fields are required!"});
    }
    const table = new tablesModel({
        name : data.tableName,
        capacity : data.tableCapacity,
        status : data.tableStatus,
    });
    table.save();
    return table;
}

async function deleteTable(id) { 
     await tablesModel.deleteOne({_id : id});
     return getTables();
}

async function addProduct(data) { 
    return await tablesModel.updateOne({_id : data[0] } , {status : data[2]} ,  {$push : {products : data[1]}});
   
}

module.exports =  { 
    getTables,
    createTable,
    deleteTable,
    addProduct
}