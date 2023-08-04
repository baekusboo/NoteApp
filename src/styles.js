import styled from 'styled-components';

export const colors ={
    primary: "#000000",
    light: "#4BD5E7",
    dark: "#1ECBE1",
    grey: "#D3D3D3"
}

export const Navbar = styled.div`
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.dark};
  display: flex;
  align-items: center;
  opacity:0.8;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavItem = styled.li`
  & + & {
    margin-left: 20px;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${colors.primary};
  text-transform: capitalize;
  font-weight: bold;
`;

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
padding: 20px 20px;
`;

export const CategoryList = styled.li`
  display: flex;
  list-style: none;
  padding: 10px 20px;
`;

export const CategoryListContainer = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px; 
  margin: 10%; 
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
  margin-top: 10%;

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
  margin-left: 70%;
  margin-bottom: 10%;
  margin-top: 10%;

  &:hover {
    color: ${colors.dark};
    background: rgba(255, 255, 255, 0.1);
  }

`;