import styled, { css } from 'styled-components';
import { IBox } from './index';

export const ContainerBox = styled.div<IBox>`
  ${({
    w = '100%',
    px = '0',
    py = '0',
    mx = '0',
    my = '0',
    pt = '0',
    pl = '0',
    pb = '0',
    pr = '0',
    mt = '0',
    ml = '0',
    mb = '0',
    mr = '0',
    justifyContent = 'center',
  }) => css`
    width: ${w};
    padding: ${py} ${px};
    padding-top: ${pt};
    padding-left: ${pl};
    padding-bottom: ${pb};
    padding-right: ${pr};
    margin: ${my} ${mx};
    margin-top: ${mt};
    margin-left: ${ml};
    margin-bottom: ${mb};
    margin-right: ${mr};
    justify-content: ${justifyContent};
  `}
  display: flex;
`;
