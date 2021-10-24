// trying to make a proper login feature with this
class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
		console.log("authentication test: ", this.authenticated)
    return this.authenticated;
  }
}

export default new Auth();
