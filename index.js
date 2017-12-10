exports.hi = (req, res) => {
  res.send(JSON.stringify('Hi! This endpoint is using an imported service'));
};

exports.calculateRectangleArea = (req, res) => {
  var rect = req.body.rect;
  let unit = req.body.Unit;
  if (!unit) {
    unit = 'cm2';
  }
  const area = rect.sideA * rect.sideA;

  rsp.send(JSON.stringify(area + unit));
};
