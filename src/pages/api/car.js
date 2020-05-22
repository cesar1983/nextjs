export default (req, res) => {
  res.statusCode = 200;
  res.json({ v: "car", b: "Ford" });
};
