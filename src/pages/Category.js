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
    NoteItem,
    NoteDescription
} from '../styles';

const Category = () => {
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

    <Header>Category</Header>
        
    <FormGroup>

        <CategoryList>
            <NoteTitle>
                Note Title 1
            </NoteTitle>
            <NoteDescription>
                Note 1 description
            </NoteDescription>
        </CategoryList>
    
        <CategoryList>
            <NoteTitle>
                Note Title 2
            </NoteTitle>
            <NoteDescription>
                Note 2 description
            </NoteDescription>
        </CategoryList>

        <CategoryList>
            <NoteTitle>
                Note Title 3
            </NoteTitle>
            <NoteDescription>
                Note 3 description
            </NoteDescription>
        </CategoryList>
        
    </FormGroup>

      <FooterHeadContainer>
            <FooterHeadText>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                Note App Coderizz Projects
            </FooterHeadText>
        </FooterHeadContainer>

    </div>
  );
};

export default Category;