const mongoose = require("mongoose");

const BillSchema = mongoose.Schema(
    {
        costumerName: { type: String, require: true },
        phoneNumber: { type: String, require: true },
        paymentMode: { type: String, require: true },
        cartItems: { type: Array, require: true },
        subTotal: { type: Number, require: true },
        tax: { type: Number, require: true },
        totalAmount: { type: Number, require: true },
    },
    { timestamps: true }
);

const Bill=mongoose.model("bills",BillSchema);
module.exports=Bill;
