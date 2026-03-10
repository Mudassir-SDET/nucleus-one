class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = 'input[id="email"]';
    this.passwordInput = 'input[id="password"]';
    this.signInButton = 'button[type="submit"]';
    this.errorMessage = 'Invalid email or password';
  }

 async goto() {
    await this.page.goto('https://nucleusone-dev.aiimone.com/login');
}

  async enterEmail(email) {
    await this.page.fill(this.emailInput,email);
  }

  async enterPassword(password) {
    await this.page.fill(this.passwordInput,password);
  }

  async clickSignIn() {
    await this.page.click(this.signInButton);
  }

  
  async login(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickSignIn();
  }

}

module.exports = LoginPage;