const catchasync = (fn) => {
  return (req, res, next) => {
    //!removing catch in async using this block
    fn(req, res, next).catch(next);
  };
};

export { catchasync };
