import React, {Component} from 'react';
import './style.css';
import Log from '../img/Log.png'
import Was_now from '../img/Was_now.png'
import Name from '../img/Name.png'


class Form extends Component {
    render() {
        return (
            <body>

            <div style={{display: "none"}}>
                <include src="build/img/sprite.svg"/>
            </div>

            <header className="page-header">

                <a className="page-header__logo" href="./index.js">
                    <picture>
                        <source media="(min-width: 1300px)" srcSet={Log}/>
                        <source media="(min-width: 768px)" srcSet={Log}/>
                        <img src={Log} width="191" height="39"
                             alt="Логотип Musofon"/>
                    </picture>
                </a>

                <nav className="page-header__nav main-nav main-nav--closed main-nav--nojs">
                    <button className="main-nav__toggle" type="button">
                        <span className="visually-hidden">Открыть меню</span>
                    </button>
                    <ul className="main-nav__list site-list">
                        <li className="site-list__item">
                            <a className="site-list__link" href="index.js">Главная</a>
                        </li>
                        <li className="site-list__item site-list__item--active">
                            <a className="site-list__link">Вход / Регистрация</a>
                        </li>
                    </ul>
                </nav>

            </header>

            <main className="page-main">
                <h1 className="page-main__title">Вход</h1>
                <p className="page-main__text">Введите логин и пароль или зарегистрируйтесь</p>

                <form className="selection" action="https://echo.htmlacademy.ru" method="post">

                    <div className="selection__wrapper">
                        <fieldset className="selection__group cat">
                            <p className="selection__item">
                                <label className="cat__data" htmlFor="cat-name">Логин: </label>
                                <input className="cat__text" type="text" name="name" id="cat-name"
                                       placeholder="musofon@mail.ru" required/>
                            </p>
                            <p className="selection__item">
                                <label className="cat__data" htmlFor="cat-weight">Пароль: </label>
                                <input className="cat__text" type="text" name="weight" id="cat-weight"
                                       placeholder="********" required/>
                            </p>
                        </fieldset>
                    </div>

                    <div className="selection__wrapper-bottom">
                        <button className="selection__button" type="submit">Войти</button>
                        <a className="site-list__link" href="personal.js">Зарегистрироваться</a>
                    </div>

                </form>

            </main>

            <footer className="page-footer">


                <div className="page-footer__bottom">

                    <div className="page-footer__wrapper">

                        <a className="page-footer__logo" href="index.js">
                            <img src={Name} width="128" height="24" alt="Логотип Musofon"/>
                        </a>

                    </div>
                </div>
            </footer>

            </body>
        );
    }
}

export default Form;