import React from 'react';
import {
    Navbar,
    NavLinks,
    NavLink,
    NavItem,
    FooterHeadContainer,
    FooterHeadText,
    FormGroup,
    Header,
    NoteTitle,
    CategoryList,
    Button,
    Select,
    NoteDescription,
    PageContainer
} from '../styles';

const Home = () => {
  return (
    <div>
      <Navbar>
        <NavLinks>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup">Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
        </NavLinks>
      </Navbar>

    <Header>Note App</Header>
   <PageContainer>
    <FormGroup>

        <CategoryList>
        <NoteTitle>Genre 1</NoteTitle>
        <Select>
         <option value="Enter the subject">Enter the subject</option>
         <option value="science">Science</option>
         <option value="eng">English</option>
         <option value="maths">Maths</option>
         <option value="social">Social</option>
         <option value="gk">GK</option>
         </Select>
         <Button>Button</Button>
        </CategoryList>

        <CategoryList>
        <NoteTitle>Genre 1</NoteTitle>
        <Select>
         <option value="Enter the subject">Enter the subject</option>
         <option value="science">Science</option>
         <option value="eng">English</option>
         <option value="maths">Maths</option>
         <option value="social">Social</option>
         <option value="gk">GK</option>
         </Select>
         <Button>Button</Button>
        </CategoryList>

        <CategoryList>
        <NoteTitle>Genre 1</NoteTitle>
        <Select>
         <option value="Enter the subject">Enter the subject</option>
         <option value="science">Science</option>
         <option value="eng">English</option>
         <option value="maths">Maths</option>
         <option value="social">Social</option>
         <option value="gk">GK</option>
         </Select>
         <Button>Button</Button>
        </CategoryList>

        <CategoryList>
        <NoteTitle>Genre 1</NoteTitle>
        <Select>
         <option value="Enter the subject">Enter the subject</option>
         <option value="science">Science</option>
         <option value="eng">English</option>
         <option value="maths">Maths</option>
         <option value="social">Social</option>
         <option value="gk">GK</option>
         </Select>
         <Button>Button</Button>
        </CategoryList>

    </FormGroup>
    </PageContainer>
      <FooterHeadContainer>
            <FooterHeadText>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                Note App Coderizz Projects
            </FooterHeadText>
        </FooterHeadContainer>

    </div>
  );
};

export default Home;