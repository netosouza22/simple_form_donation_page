import { ImageContainer } from '../ImageContainer';
import * as Styled from './styles';

export interface GridImageArray {
  altText: string;
  srcImg: string;
}

export interface PropsGridImage {
  ImgArray: GridImageArray[];
}

export const GridImage = ({ ImgArray }: PropsGridImage) => {
  return (
    <Styled.Container>
      {ImgArray.map((item, index) => {
        return <ImageContainer key={index} width="126px" height="161px" srcImg={item.srcImg} title={item.altText} />;
      })}
    </Styled.Container>
  );
};
