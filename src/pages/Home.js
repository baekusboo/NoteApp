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

const Home = () => {
  return (
    <div>

<NoteContainer>
<CategoryListContainer>
<Header>Note App</Header>

        <CategoryList>
        <NoteTitle>1</NoteTitle>
        <Input
                name="title"
                type="text"
                label="Title"
                placeholder="Add Item"
        />
        </CategoryList>

        <CategoryList>
        <NoteTitle>2</NoteTitle>
        <Input
                name="title"
                type="text"
                label="Title"
                placeholder="Add Item"
        />
        </CategoryList>
        <Button>+</Button>

        </CategoryListContainer>

    </NoteContainer>

      <FooterHeadContainer>
            <FooterHeadText>
                Note App - Made by Team Coderizz
            </FooterHeadText>
        </FooterHeadContainer>

    </div>
  );
};

export default Home;