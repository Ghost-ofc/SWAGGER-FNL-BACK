import { DataTypes, Model, Sequelize } from 'sequelize';

class User extends Model {
  static initModel(sequelize: Sequelize): typeof User {
    super.init(
      {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },
          permisopoliticas: { 
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          funcyinteract: { 
            type: DataTypes.INTEGER, // Si es un entero, usa valores numéricos como 0 (false) o 1 (true)
            allowNull: true,
            defaultValue: 0, // Usar un valor numérico en lugar de false
          },
          profileImage: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          userresponsebool: { 
            type: DataTypes.BOOLEAN, // Sequelize lo mapea a TINYINT(1) en MySQL
            allowNull: false,
            defaultValue: false,
          },
          testestresbool: { 
            type: DataTypes.BOOLEAN, // Sequelize lo mapea a TINYINT(1) en MySQL
            allowNull: false,
            defaultValue: false,
          },
      }, // attributes
      {
        sequelize,
        timestamps: false,
        tableName: 'users'
      }
    );
    return this;
  }
}

export default User;
