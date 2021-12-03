const tablesModel = require('../models/tablesModel');

async function getTables() {
    return await tablesModel.find();
}

async function getTableByID(id) {
    return await tablesModel.findById(id);
}

async function createTable(data) {
    if (!data.tableName || !data.tableCapacity || !data.tableStatus) {
        throw ({ message: "All fields are required!" });
    }
    const table = new tablesModel({
        name: data.tableName,
        capacity: data.tableCapacity,
        status: data.tableStatus,
    });
    table.save();
    return table;
}

async function deleteTable(id) {
    await tablesModel.deleteOne({ _id: id });
    return getTables();
}

async function addProduct([id, products, status]) {

    const currentProducts = await tablesModel.findById(id).lean();
    const productsToPush = products.reduce((prevValue, currentValue, index) => {
        if (prevValue.length) {
            const isExists = prevValue.findIndex(x => x.productName === currentValue.productName);
            if (isExists !== -1) {
                prevValue[isExists].quantity += Number(currentValue.quantity);
            } else {
                prevValue.push(currentValue);
            }
        } else {
            prevValue.push(currentValue);
        }
        return prevValue;
    }, currentProducts.products);
    return await tablesModel.updateOne({ _id: id }, { status: status, products: productsToPush });
}

async function deleteProduct(id, productsToDelete) {
    await tablesModel.updateOne({ _id: id }, { $pull: { products: { productName: productsToDelete[0] } } });
    return await tablesModel.findById(id);
}
module.exports = {
    getTables,
    getTableByID,
    createTable,
    deleteTable,
    addProduct,
    deleteProduct
}