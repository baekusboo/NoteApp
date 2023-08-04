import React from 'react';
import {
    FooterHeadContainer,
    FooterHeadText,
    Header,
    NoteTitle,
    CategoryList,
    Button,
    Input,
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

        <CategoryList>
        <Button>+</Button>
        </CategoryList>

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