let readtipul = [
    {
      $lookup: {
        from: "gdods",
        localField: "gdod",
        foreignField: "_id",
        as: "gdod_data"
      }
    },
    {
      $unwind: "$gdod_data"
    },
    {
      $lookup: {
        from: "hativas",
        localField: "gdod_data.hativa",
        foreignField: "_id",
        as: "hativa_data"
      }
    },
    {
      $set: {
        hativa: { $arrayElemAt: ["$hativa_data._id", 0] }
      }
    },
    {
      $lookup: {
        from: "ogdas",
        localField: "hativa_data.ogda",
        foreignField: "_id",
        as: "ogda_data"
      }
    },
    {
      $set: {
        ogda: { $arrayElemAt: ["$ogda_data._id", 0] }
      }
    },
    {
      $lookup: {
        from: "pikods",
        localField: "ogda_data.pikod",
        foreignField: "_id",
        as: "pikod_data"
      }
    },
    {
      $set: {
        pikod: { $arrayElemAt: ["$pikod_data._id", 0] }
      }
    },
  ];

module.exports = {readtipul}
