import { test } from 'playwright/test'

test.describe('Tree Component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app page
    await page.goto('http://localhost:3000')
  })
})
