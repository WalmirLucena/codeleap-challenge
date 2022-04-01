import { fireEvent, render, screen } from '@testing-library/react';
import Login from './pages/login';
import renderWithRouter from './renderWithRouter';

describe('Verifica se Renderiza a página de Login', () => {
    render(<Login/>);
  const mainTitle = screen.getByText(/Welcome to CodeLeap network!/i);
  const button = screen.getByRole('button');
  expect(mainTitle).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  it("Verifica se o botão redireciona para a pagina Home", ()=> {
    const { history } = renderWithRouter(<Login />);

    history.push('/home')

    expect(screen.getByText(/test/i)).toBeInTheDocument();

  })
});
