import Input from '../../shared/components/inputs/input/input';
import Button from '../../shared/components/buttons/button/button';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';
import { useState } from 'react';
import SVGLogo from '../../shared/components/icons/SVGLogo';
import { useRequests } from '../../shared/hooks/useRequests';
import { useGlobalContext } from '../../shared/hooks/useGlobalContext';

const LoginScreen = () => {
  const { accessToken, setAccessToken } = useGlobalContext()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { postRequest, loading } = useRequests();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    setAccessToken('novo token');
    postRequest('http://localhost:8080/auth', {
      email: email,
      senha: password,
    });
  };

  return (
    <div>
      <BackgroundImage src="./Background.svg" />
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <SVGLogo />
            <TitleLogin level={2} type="secondary">
              LOGIN ({accessToken})
            </TitleLogin>
            <Input title="EMAIL" margin="32px 0px 0px" onChange={handleEmail} value={email} />
            <Input
              type="password"
              title="SENHA"
              margin="32px 0px 0px"
              onChange={handlePassword}
              value={password}
            />
            <Button
              loading={loading}
              type="primary"
              margin="64px 0px 16px 0px"
              onClick={handleLogin}
            >
              ENTRAR
            </Button>
          </LimitedContainer>
        </ContainerLogin>
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
