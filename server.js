
const express = require('express');
const puppeteer = require('puppeteer');

const server = express();

server.get('/', async (require, response) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://www.javascript.com/about');

	const data = await page.evaluate(() => {
		return {
			about: document.querySelector('.cmp-text').innerHTML
		}
	})

	await browser.close();

	response.send({
		about: data.about
	})
})

server.listen('3000', () => {
	console.log('servidor http://localhost:3000')
});
