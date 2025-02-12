const Test = (req, res) => {
  return res.json(
    { status: "JSON response",
      message: "message"
     }
  );
}

module.exports = Test;