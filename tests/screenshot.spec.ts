import { test } from '@playwright/test'

test.describe('screenshot-desktop', () => {
  test.use({
    viewport: { width: 1440, height: 1024 },
  })

  test('screenshot-desktop', async ({ page, browserName }) => {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })
    await page.screenshot({
      path: `./screenshots/desktop-${browserName}.png`,
      fullPage: false,
    })
  })
})

test.describe('screenshot-tablet', () => {
  test.use({
    viewport: { width: 768, height: 1024 },
  })

  test('screenshot-tablet', async ({ page, browserName }) => {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })
    await page.screenshot({
      path: `./screenshots/tablet-${browserName}.png`,
      fullPage: false,
    })
  })
})

test.describe('screenshot-mobile', () => {
  test.use({
    viewport: { width: 375, height: 950 },
  })

  test('screenshot-mobile', async ({ page, browserName }) => {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })
    await page.screenshot({
      path: `./screenshots/mobile-${browserName}.png`,
      fullPage: false,
    })
  })
})
