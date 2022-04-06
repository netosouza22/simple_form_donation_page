import * as Styled from './styles';

export interface Props {
  srcImg: string;
  text: string;
  width?: string;
  height?: string;
}

export const Icon = ({ srcImg = '', text, width, height }: Props) => {
  return (
    <Styled.Container>
      <img src={srcImg} alt={text} width={width} height={height} />
    </Styled.Container>
  );
};
