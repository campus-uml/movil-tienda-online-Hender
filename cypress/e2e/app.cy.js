describe('RecipeCard Component', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should render the image correctly', () => {
      cy.get('img[alt="Online Shopping"]').should('be.visible');
    });
  
    it('should render the title correctly', () => {
      cy.contains('h2', 'Online Shopping').should('be.visible');
    });
  
    it('should render the description correctly', () => {
      cy.contains('p', 'Shop anytime, anywhere, and enjoy the best deals from the comfort of your home.').should('be.visible');
    });
  
    it('should render the button correctly with correct text', () => {
      cy.contains('button', 'Shop Now').should('be.visible');
    });
  });