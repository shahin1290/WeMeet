describe('Homepage', () => {
    beforeAll(async () => {
        jest.setTimeout(10000);
        await page.goto(appURL);
    });

    beforeEach(async () => {
        await page.reload();
    });

    describe('navbar', () => {

        it('has a login button and a register button', async () => {
            await expect(page).toMatch('Log in');
            await expect(page).toMatch('Sign up')
        });

        it('renders different buttons when user logged in', async () => {
            await page.click('button[id=login-btn]')
            await expect(page).toMatch('Start a new group')
            await expect(page).toMatch('Profile')
            await expect(page).toMatch('Log out');
        });

    })

    describe('footer', () => {

    })

}); 
