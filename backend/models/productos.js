const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product= sequelize.define('Product',{
    nombre:{type:DataTypes.STRING,allowNull:false},
    category:{type:DataTypes.INTEGER,allowNull:false},
    price:{type:DataTypes.DOUBLE,allowNull:false},
    stock:{type:DataTypes.INTEGER,allowNull:false}
})