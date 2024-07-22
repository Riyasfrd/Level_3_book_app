export interface Token {
  colors: {
    base_Primary_Color: string;
    base_Secondary_Color_2: string;
    base_Secondary_Color_2_hover: string;
    base_Secondary_Color_3: string;
    base_Secondary_Color_4: string;
    base_Secondary_Color_5: string;
    base_Secondary_Color_6: string;
    authoe_font_color: string;
    book_title: string;
    book_description: string;

    next_book_title: string;
    next_book_description: string;

    main_Article_background: string;
    text: string;
    menu_font_color: string;

    music_icon_background: string;
    Music_album_title: string;
    Music_album_description: string;

    right_panel_background: string;
    body_background: string;
    header_background_mobile: string;
    search_box_background: string;

    book_icon_background: string;
  };
  fonts: {
    main: string;
    heading: string;

    body: string;
    h1_mobile: string;
    h1_desktop: string;

    h2_mobile: string;
    h2_desktop: string;

    h3_mobile: string;
    h3_desktop: string;

    button: string;

    book_title_mobile: string;
    book_title_desktop: string;

    language_desktop: string;

    fontSize22: string;
    fontSize18: string;
    fontSize20: string;
    fontSize17: string;
    fontSize16: string;
    sub_heading: string;

  };
}

export const token:Token = {
  colors: {
    base_Primary_Color: '#C9CCCF',
    base_Secondary_Color_2: '#EB763C',  //orange
    base_Secondary_Color_2_hover: '#F14D22', 
    base_Secondary_Color_3: '#FFFFFF', // white
    base_Secondary_Color_4: '#DCE0E5', // sub Heading Article
    base_Secondary_Color_5: '#303030',  //black
    base_Secondary_Color_6: '#1AA928', //green

    authoe_font_color: '#434D56',  //gray

    book_title: '#434C56',
    book_description: '#8D96A8',

    next_book_title: '#333333',
    next_book_description: '#8A97A4',

    main_Article_background: '#1AA928',
    text: '#212529',

    menu_font_color: '#ABB5BA',

    music_icon_background: '#D6F5E1',
    Music_album_title: '#333333',
    Music_album_description: '#70808F',

    right_panel_background: '#E4FBE7',
    body_background: '#F9F9F9',
    header_background_mobile: '#303331',
    search_box_background: '#ECF0F3',

    book_icon_background: '#E4FBE7',
  },
  fonts: {
    main: 'Arial, sans-serif',
    heading: 'Georgia, serif',

    body: '14px',
    
    h1_mobile: '28px',
    h1_desktop: '30px',

    fontSize22: '22px',
    fontSize18: '18px',
    fontSize20: '20px',
    fontSize17: '17px',
    fontSize16: '16px',

    sub_heading: '24px',

    h2_mobile: '24px',
    h2_desktop: '24px',

    h3_mobile: '15px',
    h3_desktop: '18px',

    button: '14px',

    book_title_mobile: '14px',
    book_title_desktop: '16px',

    language_desktop: '20px',

  },
};
