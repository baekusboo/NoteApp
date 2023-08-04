import styled from 'styled-components';

export const colors ={
    primary: "#000000",
    light: "#4BD5E7",
    dark: "#1ECBE1",
    grey: "#D3D3D3"
}

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterHeadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
`;

export const FooterHeadText = styled.p`
  color: ${colors.dark};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

export const Header = styled.h1`
  color: ${colors.primary};
  text-align: center;
  text-transform: capitalize;
  margin-top: 10%;
`;

export const NoteTitle = styled.h2`
font-size: 18px;
color: ${colors.primary} ;
padding: 10px 20px;
`;

export const CategoryList = styled.li`
  display: flex;
  list-style: none;
  padding: auto;
  justify-content:center;

`;

export const CategoryListContainer = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${colors.light};
  border-radius: 4px; 
  margin-top:5%;
  margin-bottom:5%;

  width: 50%;
`;

export const NoteDescription = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  margin-left: 20px;
  color: ${colors.primary} ;
`;

export const Input = styled.input`
  font-size: 16px;
  border: none;
  border-radius: 4px;
  border-bottom: 1px solid ${colors.dark};
  background: transparent;
  outline: none;
  height: 30px;
  color: ${colors.primary};
  width: 70%;
  margin-top: auto;
  margin-bottom: auto;
  padding: 10px 20px;
  &::placeholder {
    color: ${colors.grey};
  }
`;

export const Button = styled.button`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  text-align: center;
  border-radius: 50%;
  font-size: 30px;
  cursor: pointer;
  padding: 5px 15px;
  font-weight: 500;
  background:${colors.light};
  color: ${colors.primary};
  margin-left:85%;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-right: 5%;

  &:hover {
    color: ${colors.dark};
    background: rgba(255, 255, 255, 0.1);
  }

`;