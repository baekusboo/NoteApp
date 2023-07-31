import styled from 'styled-components';

export const colors ={
    primary: "#000000",
    light: "#F0E042",
    dark: "#ECD813",
    bg: "#FFFFF0"
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

export const FooterHeadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background: ${colors.dark};
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
  opacity:0.8;
`;

export const FooterHeadText = styled.p`
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

export const Header = styled.h1`
  color: ${colors.primary};
  text-align: center;
  text-transform: capitalize;
  margin-top: 80px;
`;

export const NoteTitle = styled.h2`
font-size: 20px;
margin-left: 20px;
margin-bottom: 20px;
color: ${colors.primary} ;
`;

export const CategoryList = styled.ul`
  display: fixed;
  list-style: none;
`;

export const NoteDescription = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  margin-left: 20px;
  color: ${colors.primary} ;
`;

export const Select = styled.select`
  font-size: 18px;
  border: 1px solid ${colors.dark};
  background: transparent;
  height: 30px;
  color: ${colors.primary} ;
  width: 300px;
  outline: none;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 10px;

  border-radius: 4px;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Button = styled.button`
  background-color: ${colors.dark};
  color: ${colors.primary};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 20px;

  &:hover {
    background-color: ${colors.light};
  }

  &:focus {
    outline: none;
  }
`;