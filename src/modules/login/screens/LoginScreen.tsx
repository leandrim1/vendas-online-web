import axios from 'axios';
import Input from '../../shared/inputs/input/input';
import Button from '../../shared/buttons/button/button';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';
import { useState } from 'react';
import SVGLogo from '../../shared/icons/SVGLogo';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    await axios({
      method: 'post',
      url: '/user/12345',
      data: {
        email: email,
        senha: password,
      },
    })
      .then((result) => {
        alert(`Fez login ${result.data.accessToken}`);
        return result.data;
      })
      .catch(() => {
        alert('Usuário ou senha inválido');
      });
  };

  return (
    <div>
      <BackgroundImage src="./background.svg" />
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <SVGLogo />
            <TitleLogin level={2} type="secondary">
              LOGIN
            </TitleLogin>
            <Input title="EMAIL" margin="32px 0px 0px" onChange={handleEmail} value={email} />
            <Input
              type="password"
              title="SENHA"
              margin="32px 0px 0px"
              onChange={handlePassword}
              value={password}
            />
            <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
              ENTRAR
            </Button>
          </LimitedContainer>
        </ContainerLogin>
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
