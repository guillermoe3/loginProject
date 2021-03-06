module.exports = (sequelize, DataTypes) => {

const Users = sequelize.define('Users',{
    id_usuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    tableName: "users",
    timestamps: false,
    //freezeTableName:true
});
 
    return Users;
}
