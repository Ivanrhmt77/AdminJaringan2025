module.exports = (sequelize, Sequelize) => {
  const Axon = sequelize.define("axon", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lokasi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    kapasitas: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM("aktif", "nonaktif", "maintenance"),
      defaultValue: "aktif",
    },
    tanggal_instalasi: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    keterangan: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  });

  return Axon;
};
