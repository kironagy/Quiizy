// INITIAL MAIN ERROR CLASS
class MainError extends Error {
  // SET THE MESSAGE AND STATUS CODE PROPS
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = MainError;
