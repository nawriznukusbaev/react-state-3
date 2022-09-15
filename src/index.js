import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HeaderBanner, HeaderTop} from "./components/header";
import Partner from "./components/partner";
import {Opisanie, Protsess} from "./components/main";
import Cart from "./components/cart";
import {GarantTitle, GarantBlock} from "./components/garant";
import {KomandaBlockTitle, KomandaInner, KomandaFooter} from "./components/komanda";
import {PrivateBlockTitle, PrivateBlock} from "./components/private";
import {QuestionBlockTitle,QuestionForm} from "./components/question";
import {FooterContact,FooterContent} from "./components/footer";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>

        <header className="header">
            <input type="checkbox" name="header-top" id="tab1"/>
            <label className="header-top__tab" htmlFor="tab1"><span className="icon-cross"></span></label>
            {HeaderTop}
            {HeaderBanner}
        </header>
        {Partner}
        <main className="main">
            {Opisanie}
            {Protsess}
        </main>
        {Cart}
        <div className="garant">
            {GarantTitle}
            {GarantBlock}
        </div>
        <div className="komanda">
            <div className="container">
                {KomandaBlockTitle}
                {KomandaInner}
                {KomandaFooter}
            </div>
        </div>
        <div className="private">
            <div className="container">
                <div className="private-inner">
                    {PrivateBlockTitle}
                    {PrivateBlock}
                </div>
            </div>
        </div>
        <div className="question">
            <div className="container">
                <div className="question-inner">
                    {QuestionBlockTitle}
                    {QuestionForm}
                </div>
            </div>
        </div>
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    {FooterContact}
                    {FooterContent}
                </div>
            </div>
        </footer>


    </React.StrictMode>
);

reportWebVitals();
