import * as S from "./style";

const Input = ({ placeholder }) => {
  return (
    <S.InputRow>
      <S.Input placeholder={placeholder} />
    </S.InputRow>
  );
};

export default Input;
