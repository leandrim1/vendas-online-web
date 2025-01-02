import Input from '../../shared/inputs/input/input';
import Button from '../../shared/buttons/button/button';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <BackgroundImage src="./background.png" />
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src="./logo.png" />
            <TitleLogin level={2} type="secondary">
              LOGIN
            </TitleLogin>
            <Input title="USUÁRIO" />
            <Input title="SENHA" />
            <Button type="primary" margin="64px 0px 16px 0px">
              ENTRAR
            </Button>
          </LimitedContainer>
        </ContainerLogin>
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
