import styled from 'styled-components';

const Button = ({ variant, children, ...props }) => {
  const Component = SVariants[variant] || SBase;
  return <Component {...props}>{children}</Component>;
};

const SBase = styled.button`
  font-family: 'Lato', sans-serif;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  border: none;
  outline: none;
`;

const SVariants = {
  primary: styled(SBase)`
  background-color: rgb(66, 195, 96);
  border-bottom: 2px solid rgb(40, 167, 69);
  &:hover {
    background-color: rgb(66, 160, 96);
  `,
  danger: styled(SBase)`
    background-color: rgb(215, 58, 73);
    border-bottom: 2px solid rgb(175, 28, 42);
    &:hover {
      background-color: rgb(160, 28, 4);
    }
  `,
  create: styled(SBase)`
    width: auto;
    font-size: 1.1rem;
    background: rgb(66, 195, 96);
    border-bottom: 2px solid rgb(40, 167, 69);
    text-decoration: none;
    &:hover {
      background: rgb(31, 97, 46);
      border-bottom: 2px solid rgb(37, 116, 55);
    }
  `,
  close: styled(SBase)`
    width: auto;
    color: rgb(3, 102, 214);
    font-size: 1.1rem;
    text-decoration: none;
    &:hover {
      color: rgb(8, 11, 27);
    }
  `,
};

export default Button;
