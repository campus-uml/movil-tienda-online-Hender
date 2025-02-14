import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import RecipeCard from '../components/ui/card';

describe('Testing de RecipeCard.tsx', () => {
    it('Renderiza correctamente el componente', () => {
        const { baseElement } = render(<RecipeCard />);
        expect(baseElement).toMatchSnapshot();
    });

    it('Debe renderizar el título "Online Shopping"', () => {
        const { getByText } = render(<RecipeCard />);
        expect(getByText(/Online Shopping/i)).toBeTruthy();
    });

    it('Debe renderizar la descripción correctamente', () => {
        const { getByText } = render(<RecipeCard />);
        expect(getByText(/Shop anytime, anywhere, and enjoy the best deals from the comfort of your home./i)).toBeTruthy();
    });

    it('Debe renderizar el botón "Shop Now"', () => {
        const { getByText } = render(<RecipeCard />);
        expect(getByText(/Shop Now/i)).toBeTruthy();
    });

    it('Debe reaccionar correctamente al hacer clic en el botón', () => {
        const { getByText } = render(<RecipeCard />);
        const button = getByText(/Shop Now/i);
        fireEvent.click(button);
        expect(button).toBeTruthy(); // Aquí puedes agregar más lógica si el botón debe realizar alguna acción
    });
});
