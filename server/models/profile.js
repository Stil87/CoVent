'use strict';

module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define('profile', {
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hasNewMatch: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }

  });

  profile.associate = model => {

    profile.belongsTo(model.user);

    profile.belongsToMany(model.profile, {
      through: 'likedProfiles',
      as: 'likedProfile',
      foreignKey: 'likedProfile'
    });

    profile.belongsToMany(model.profile, {
      through: 'likedProfiles',
      as: 'givenLike',
      foreignKey: 'givenLike'
    });

    profile.belongsToMany(model.profile, {
      through: 'receivedLikes',
      as: 'receivedLike',
      foreignKey: 'receivedLike'
    });

    profile.belongsToMany(model.profile, {
      through: 'receivedLikes',
      as: 'liked',
      foreignKey: 'liked'
    });

    profile.belongsToMany(model.profile, {
      through: 'matches',
      as: 'matched',
      foreignKey: 'matched'
    });

    profile.belongsToMany(model.profile, {
      through: 'matches',
      as: 'partner',
      foreignKey: 'partner'
    });

    profile.belongsToMany(model.category, {
      through: 'categoryProfiles'
    });

  };

  return profile;
};