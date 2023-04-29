import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Form = styled.form`
  padding: 16px 0;
`;
export const Input = styled.input`
  border: 1px solid #ccc;
  margin: 0 auto;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  text-align: center;
  width: 90%;
`;

export const Title = styled.h2`
  margin-top: 140px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding: 8px 0;
`;
export const SignUpPhrase = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 12px;
  background: #e10057;
`;

export const SignUpSpan = styled.p`
  color: white;
`;
export const Link = styled(LinkRouter)`
  text-decoration: none;
  &:hover {
    cursor: pointer;
    font-weight: 500;
  }
`;
export const ErrorMsg = styled.p`
  font-size: 14px;
  color: red;
  text-align: center;
`;
