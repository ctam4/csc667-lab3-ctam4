const myHandlerFunction = async (req, res) => {
  const responseObject = {
    status: 'ERROR',
    date: new Date(),
    params: req.query,
    response: 123,
  };
  res.send(responseObject);
};

// to use in another file
module.exports = myHandlerFunction;
