const { chromium } = require('playwright');

const one = async () => {
	const browser = await chromium.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto('http://github.com/');
	await page.screenshot({ path: `example.png` });

	await browser.close();
};

const usernameSelector = '#login_field';
const passwordSelector = '#password';
const signInSelector = '#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block';
const errorMessageSelector = '#js-flash-container > div > div > button';

const two = async () => {
	const browser = await chromium.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto('http://github.com/login');

	await page.type(usernameSelector, 'tenexxer');
	await page.type(passwordSelector, 'password');

	await page.click(signInSelector);

	await page.waitForTimeout(5000);
	await browser.close();
	
	process.exit(0);
};

module.exports = {
	one,
	two
};
