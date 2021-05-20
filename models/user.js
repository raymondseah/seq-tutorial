module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  //when user is deleted, post and profile will delete as well.
  User.associate = (models) => {
    User.hasMany(models.Post, { onDelete: "cascade"});
    User.hasOne(models.Profile, { onDelete: "cascade"});
  };
  // put together on top or the second will assocaite will overwrite the first

  // User.associate = (models) => {
  //   User.hasOne(models.Profile, {
  //     onDelete: "cascade",
  //   });
  // };

  return User;
};
