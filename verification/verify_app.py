
from playwright.sync_api import sync_playwright, expect

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Navigate to the app
            page.goto("http://localhost:3000")

            # Wait for content to appear (waiting for a specific unique element)
            page.wait_for_selector("text=Statement", timeout=10000)

            # Check for main sections headers specifically
            # Using more specific selectors to avoid strict mode violations
            expect(page.get_by_text("Selected Works", exact=True)).to_be_visible()
            expect(page.get_by_text("The Playground", exact=True)).to_be_visible()
            expect(page.get_by_text("Activities", exact=True)).to_be_visible()
            # Research appears multiple times, so we look for the section header
            expect(page.locator("section").filter(has_text="Research").first).to_be_visible()

            # Screenshot main page
            page.screenshot(path="verification/main_page.png", full_page=True)
            print("Main page screenshot taken.")

            # Click on a project
            # Assuming "Urban Flux" is one of the projects
            page.get_by_text("Urban Flux").first.click()

            # Wait for detail view
            expect(page.get_by_text("BACK TO OVERVIEW")).to_be_visible()

            # Screenshot detail page
            page.screenshot(path="verification/detail_page.png", full_page=True)
            print("Detail page screenshot taken.")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_frontend()
