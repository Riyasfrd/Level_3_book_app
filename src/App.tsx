import React, { useState } from 'react';
import { GlobalStyles } from './styles';
import { MainArticle } from './component/molecules';
import { AuthorsCartItem, BookCartItem, RightPanel, Header, Footer, BookCartSection } from './component/organism';
import { LeftPanel } from './component/organism/leftPanel/LeftPanel';

import { AppDiv, BodyWrapper, RightPanelDiv } from './AppDiv';

import { Book } from './Utilities/bookData/BookDataType';
import { BookData } from './Utilities/bookData/BookData';
import { AuthorData } from './Utilities/authordata/AuthorData';
import { Author } from './Utilities/authordata/AuthorDataType';
import { CartBookData } from './Utilities/cartBook/CartBookData';


function App() {

  const bookListData: Book[] = BookData;
  const authorDataList: Author[] = AuthorData;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppDiv>
      
      <GlobalStyles />
      <div>
        <LeftPanel isOpen={isMenuOpen} />
      </div>
      <BodyWrapper>
        
        <Header togglePanel={toggleMenu} />
        
        <MainArticle />
        <BookCartItem bookListData={bookListData} />
        <AuthorsCartItem authorDataList={authorDataList} />

        <BookCartSection cartDataList={CartBookData} />

        <Footer />
      </BodyWrapper>
      
      <RightPanelDiv>
        <RightPanel />
      </RightPanelDiv>
      
    </AppDiv>
  );
}

export default App;
