class HomePage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async goto() {
    await this.page.goto('/v1/inventory.html');
  }
  getItemByName(name) {
    return this.page.locator('.inventory_item', { hasText: name }).locator('button.btn_primary');
  }
  getItemRemoveButton(name) {
    return this.page.locator('.inventory_item', { hasText: name }).locator('.btn_secondary', { hasText: 'REMOVE' });
  }
}

module.exports = HomePage;