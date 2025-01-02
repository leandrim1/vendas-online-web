import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';
import { TitleInput, BoxInput } from './input.styles';

interface InputProps extends InputPropsAntd {
  title?: string;
}

const Input = ({ title, ...props }: InputProps) => {
  return (
    <BoxInput>
      <TitleInput>{title}</TitleInput>
      <InputAntd {...props} />
    </BoxInput>
  );
};

export default Input;
