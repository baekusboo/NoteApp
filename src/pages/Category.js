import React from 'react';
import {
    Navbar,
    NavLinks,
    NavLink,
    NavItem,
    FooterHeadContainer,
    FooterHeadText,
    Header,
    NoteTitle,
    CategoryList,
    Button,
    Input,
    NoteDescription,
    CategoryListContainer,
    NoteContainer
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

    <Header>Note App</Header>

    <NoteContainer>

<CategoryListContainer>
<NoteTitle>Grocery List</NoteTitle>

        <CategoryList>
          <Input
                name="title"
                type="text"
                label="Title"
                placeholder="Add Item"
        />
        </CategoryList>

        <CategoryList>
        <Input
                name="title"
                type="text"
                label="Title"
                placeholder="Add Item"
        />
        </CategoryList>
        </CategoryListContainer>
    </NoteContainer>
    <Button>Add</Button>

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