exports.listUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: [
      {
        id: 1,
      },
    ],
  });
};
