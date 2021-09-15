import { createGlobalStyle } from "styled-components"

import FavoritLight from "./assets/font/FavoritLight.woff2"
import FavoritMedium from "./assets/font/FavoritMedium.woff2"

const Styles = createGlobalStyle`
    @font-face {
        font-family: 'Favorit';
        src: url(${FavoritLight});
        }
    @font-face {
            font-family: 'Favorit';
            src: url(${FavoritMedium});
            font-weight: 600;
        }
    *:focus {
        outline: none;
    }
    body,
    html,
    a {
        font-family: 'Favorit';
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #000;
    }
    a {
        text-decoration: none;
        outline: none;
        color: #000;

        :hover {
            color: #000;
        }
    }
    

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Favorit';
        color: #000;
        font-size: 2.375rem;
        line-height: 2.8rem;
        font-weight: 600;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
    }
    h1 {
        font-size: 3.575rem;
        line-height: 3.5625rem;
        font-weight: 600;

        @media only screen and (max-width: 768px) {
            font-size: 2.625rem;
            }
    }
    h2 {
        font-family: 'Favorit';
        color: #000;
        font-size: 2.575rem;
        line-height: 2.8rem;
        font-weight: 600;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
    }
    h6 {
        font-family: 'Favorit';
        color: #000;
        font-size: 1.175rem;
        line-height: 1.6rem;
        font-weight: 600;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.425rem;
        }
    }

    p {
        color: gray;
        font-size: 1.125rem;
    }
    span {
        color: gray;

    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        text-align: left;
        padding-top: 2.5rem;
        padding-right: 2rem;
    }
    section > .ant-row.ant-row-center.ant-row-middle{
      width: 100%;
      max-width: 998px;
    }
    .anticon,
    .ant-notification-notice-icon-success {
        color: rgb(255,130,92);
    }
   
   .ant-card-meta-title {
      font-weight: 900;
   } 
   .ant-card{
      width: 100%;  
   }
   .ant-card-cover img{
      height: 240px;
      object-fit: cover;
   }
`

export default Styles
