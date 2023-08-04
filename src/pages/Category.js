import React from 'react';
import {
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

<NoteContainer>
<CategoryListContainer>

<Header>Title 1</Header>

        <CategoryList>
          <input type="checkbox" />
          <Input
            name="desc"
            type="text"
            label="Description"
            placeholder="Add List Item"
          />
        </CategoryList>

        <CategoryList>
          <input type="checkbox" />
          <Input
            name="desc"
            type="text"
            label="Description"
            placeholder="Add List Item"
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

export default Category;