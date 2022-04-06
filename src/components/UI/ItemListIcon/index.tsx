import { Icon, Props } from '../Icon';
import TextComponent, { IProps as PropsTextComponent } from '../TextComponent';
import * as Styled from './styles';

type PropsItemListIcon = Props & PropsTextComponent;

export const ItemListIcon = ({
  srcImg,
  text,
  width = '30px',
  height = '30px',
  colorDark,
  fontSize = 'sm',
  bold,
  background,
  children,
}: PropsItemListIcon) => {
  return (
    <Styled.Container>
      <Icon srcImg={srcImg} text={text} width={width} height={height} />
      <TextComponent colorDark={colorDark} fontSize={fontSize} bold={bold} background={background}>
        {children}
      </TextComponent>
    </Styled.Container>
  );
};
