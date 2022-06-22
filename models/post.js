"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Posts extends Model {
        static associate({ User }) {
            this.belongsTo(User, { foreignKey: "userId", as: "user" });
        }

        toJSON() {
            return { ...this.get(), id: undefined, userId: undefined };
        }
    }
    Posts.init(
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            body: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "posts",
            modelName: "Posts",
        }
    );
    return Posts;
};
