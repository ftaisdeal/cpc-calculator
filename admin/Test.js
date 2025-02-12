const Test = (req, res) => {
  return res.json(
    { status: "JSON response",
      message: "This is a message"
     },
     { status: "JSON response",
      message: "This is a message"
     },
  );
}

module.exports = Test;