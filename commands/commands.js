async function login(page, username, password) {
  await page.goto('/');
  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();
}

async function logout(page) {
  await page.locator('#logout_sidebar_link').click();
}

async function waitForInventory(page) {
  await page.waitForSelector('.inventory_list');
}

module.exports = {
  login,
  logout,
  waitForInventory,
};