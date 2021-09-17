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
   .icon{
      width:18px;
      height: 18px;
      margin-left: .4rem;
   }
   
   .margin-auto{
        margin: 0 auto;
    }
    .mx-width400{
       max-width: 400px;
    }
    .mt-4{
      margin-top: 4rem;
    }
    .mb-3{
      margin-top: 3rem;
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
   .ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
      max-width: auto !important;
      width: 100%;
      height: auto;
      border-width: 1px;
      border-style: solid;
      border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
      outline: none;
      font-size: 0.875rem;
      padding: 1rem 1.25rem;
      transition: border-color 0.3s ease-in;
      border-radius: 8px;
      color: #000;

      &:focus,
      &:hover {
         border-color: #2e186a !important;
         box-shadow: none !important;
      }
   }
   .ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector input{
      height: auto;
      padding: 1.2rem .6rem;
   }
   .ant-select-arrow .anticon {
    color: rgb(0, 0, 0);
}
`

export default Styles
