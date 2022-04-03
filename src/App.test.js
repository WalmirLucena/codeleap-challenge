import { fireEvent, screen } from '@testing-library/react';
import Login from './pages/login';
import renderWithRouter from './renderWithRouter';

it('Verifica se Renderiza a página de Login', () => {
  renderWithRouter(<Login/>);
  const mainTitle = screen.getByText(/Welcome to CodeLeap network!/i);
  const button = screen.getByRole('button');
  expect(mainTitle).toBeInTheDocument();
  expect(button).toBeInTheDocument();

});

it("Verifica se o Botão redireciona para outra página",async ()=> {
  const {history} = renderWithRouter(<Login/>);

  const usernameInput = screen.getByTestId('username');
  const button = screen.getByTestId('button-submit');

  fireEvent.change(usernameInput, {target: {value: 'Walmir'}});
  expect(button.disabled).toBe(false);
  fireEvent.click(button)
  
  const {pathname} = history.location;
  expect(pathname).toBe('/home');
})
