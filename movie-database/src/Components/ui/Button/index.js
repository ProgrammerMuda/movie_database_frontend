import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  // PROPS VARIANT
  background-color: ${(props) => props.theme.colors[props.variant] || props.theme.colors['primary']};

  // PROPS FULL
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
  //untuk mengatur size button
    ${(props) => (props.size ? props.theme.size[props.size] : props.theme.sizes.md)};
`;

export default Button;
