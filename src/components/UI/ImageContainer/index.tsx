import * as Styled from './styles';
export interface ImageProps {
  width: string;
  height: string;
  srcImg: string;
  title: string;
}

export const ImageContainer = ({ srcImg, title, ...props }: ImageProps) => {
  return (
    <Styled.Container {...props}>
      <img width="100%" height="100%" src={srcImg} alt={title} />
    </Styled.Container>
  );
};
