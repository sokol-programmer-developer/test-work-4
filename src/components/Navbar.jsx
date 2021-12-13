import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css';
import '../css/navbar_mobile.css';

import logo from "../pic/logo.svg"

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    const closeMobileMenu = () => setSidebar(false);
    return (
        <div>
            <div className="navbar"

            >
                <div className="navbar_desktop">


                        <Link to='/' className="nav_logo" onClick={closeMobileMenu}>
                            <img src={logo} className="nav_logo_pic" alt="logo"/>
                        </Link>

                        <ul className="nav_desktop_ul" >
                            <li className="nav_desktop_li" >
                                <Link className="nav_desktop_link" to="/" > Продукты        </Link>
                            </li>
                            <li className="nav_desktop_li" >
                                <Link className="nav_desktop_link" to="/" > Технологии      </Link>
                            </li>
                            <li className="nav_desktop_li" >
                                <Link className="nav_desktop_link" to="/" > Experience  </Link>
                            </li>
                        </ul>

                        <div className="nav_icon">
                            <Link to='/' className="nav_icon_link" onClick={closeMobileMenu}>
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >

                                    <path
                                        d="M39 14.8505C37.8742 15.3361 36.6807 15.6523 35.4593 15.7885C36.7535 15.0484 37.7182 13.8569 38.1626 12.45C36.9578 13.1571 35.6369 13.6521 34.2593 13.9125C33.6946 13.3207 33.0149 12.8466 32.2605 12.5182C31.5062 12.1899 30.6925 12.0139 29.8678 12.0008C29.0431 11.9877 28.2241 12.1377 27.4594 12.4419C26.6947 12.7461 25.9998 13.1984 25.4159 13.7719C24.8346 14.3272 24.3751 14.9938 24.0656 15.7306C23.7562 16.4675 23.6033 17.2589 23.6165 18.0561C23.6193 18.522 23.6714 18.9863 23.7717 19.4416C21.3043 19.3305 18.8904 18.6953 16.6957 17.5798C14.5297 16.4906 12.6192 14.9674 11.087 13.108C10.5319 14.0333 10.2425 15.0896 10.2496 16.1641C10.242 17.1738 10.4978 18.1686 10.9924 19.0532C11.4699 19.9217 12.1562 20.6619 12.9913 21.2091C12.0155 21.1751 11.0622 20.9109 10.2117 20.4387V20.5138C10.1922 21.9217 10.6889 23.2894 11.6107 24.366C12.5029 25.4483 13.7527 26.1881 15.1422 26.4564C14.614 26.5932 14.0702 26.6624 13.5241 26.6625C13.1369 26.6592 12.7504 26.6277 12.3678 26.5681C12.7627 27.7703 13.529 28.8212 14.5597 29.574C15.5904 30.3269 16.8342 30.7441 18.1174 30.7676C15.9511 32.4696 13.2545 33.3835 10.483 33.355C9.98768 33.358 9.49254 33.3333 9 33.2812C11.8079 35.0795 15.0912 36.0248 18.4409 35.9995C20.5343 36.0143 22.6143 35.6689 24.587 34.9787C26.3795 34.3672 28.0441 33.4395 29.4991 32.2411C30.8564 31.0984 32.0394 29.7693 33.0117 28.2945C33.9722 26.8558 34.7129 25.286 35.2102 23.6354C35.6872 22.0557 35.9312 20.4168 35.9348 18.7688C35.9348 18.4187 35.9285 18.1561 35.9159 17.981C37.1199 17.1207 38.1634 16.0615 39 14.8505Z"
                                        fill="#808080"
                                    />
                                </svg>
                            </Link>

                            <Link to='/' className="nav_icon_link" onClick={closeMobileMenu}>
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M35.8157 12.9348C35.526 12.6342 35.1777 12.3962 34.7923 12.2355C34.407 12.0747 33.9928 11.9947 33.5753 12.0003H15.1747C14.7573 11.9948 14.3432 12.0749 13.958 12.2357C13.5728 12.3964 13.2246 12.6344 12.9348 12.9348C12.6343 13.2245 12.3963 13.5727 12.2355 13.9579C12.0748 14.3432 11.9947 14.7573 12.0003 15.1747V33.5753C11.9947 33.9927 12.0748 34.4068 12.2355 34.7921C12.3963 35.1773 12.6343 35.5255 12.9348 35.8152C13.2245 36.1157 13.5727 36.3536 13.958 36.5144C14.3432 36.6751 14.7573 36.7552 15.1747 36.7497H33.5753C34.4158 36.7452 35.2206 36.4093 35.815 35.815C36.4093 35.2206 36.7452 34.4159 36.7497 33.5753V15.1747C36.7553 14.7573 36.6753 14.3433 36.5147 13.958C36.354 13.5728 36.1161 13.2246 35.8157 12.9348ZM20.8869 20.9187C21.3475 20.4618 21.8949 20.1017 22.4968 19.8596C23.0987 19.6175 23.743 19.4983 24.3917 19.509C25.0429 19.4973 25.69 19.6161 26.2947 19.8583C26.8993 20.1004 27.4494 20.4612 27.9126 20.9192C28.3735 21.3591 28.7403 21.888 28.991 22.4737C29.2417 23.0595 29.3709 23.69 29.3709 24.3271C29.3709 24.9643 29.2417 25.5948 28.991 26.1805C28.7403 26.7663 28.3735 27.2951 27.9126 27.735C27.4495 28.1931 26.8994 28.5539 26.2947 28.7961C25.69 29.0383 25.043 29.157 24.3917 29.1452C23.743 29.1558 23.0987 29.0365 22.4968 28.7944C21.8949 28.5522 21.3475 28.192 20.8869 27.735C20.4259 27.2951 20.0589 26.7663 19.8081 26.1805C19.5574 25.5947 19.4281 24.9641 19.4281 24.3269C19.4281 23.6896 19.5574 23.059 19.8081 22.4732C20.0589 21.8874 20.4259 21.3586 20.8869 20.9187ZM33.9466 32.9168C33.9495 33.0471 33.9252 33.1766 33.8753 33.2971C33.8253 33.4175 33.7509 33.5262 33.6566 33.6162C33.5658 33.7072 33.4577 33.7791 33.3387 33.8275C33.2196 33.8759 33.0921 33.9 32.9636 33.8982H15.7385C15.6087 33.9008 15.4797 33.8772 15.3592 33.8287C15.2388 33.7802 15.1294 33.7079 15.0376 33.6161C14.9458 33.5243 14.8734 33.4149 14.825 33.2945C14.7765 33.174 14.7529 33.045 14.7555 32.9152V22.4736H17.0271C16.8112 23.1563 16.7023 23.8683 16.7043 24.5843C16.6908 25.573 16.8846 26.5536 17.2734 27.4628C17.6621 28.372 18.2372 29.1896 18.9613 29.8629C19.6749 30.571 20.523 31.1289 21.4557 31.5039C22.3883 31.8789 23.3866 32.0633 24.3917 32.0463C25.746 32.0568 27.0795 31.7121 28.259 31.0466C29.4163 30.4039 30.3834 29.4673 31.0627 28.3312C31.7463 27.2018 32.1033 25.905 32.0941 24.5848C32.096 23.8688 31.9872 23.1568 31.7713 22.4741H33.9466V32.9152V32.9168ZM33.9466 18.5277C33.9482 18.6742 33.9205 18.8195 33.8652 18.9552C33.8098 19.0909 33.728 19.2141 33.6244 19.3178C33.5208 19.4214 33.3976 19.5033 33.262 19.5587C33.1263 19.6141 32.981 19.6418 32.8345 19.6403H30.0313C29.8849 19.6418 29.7397 19.6141 29.6042 19.5588C29.4686 19.5035 29.3455 19.4216 29.242 19.3181C29.1384 19.2146 29.0566 19.0915 29.0013 18.9559C28.946 18.8204 28.9182 18.6751 28.9198 18.5288V15.8676C28.9183 15.7223 28.9461 15.5782 29.0016 15.4439C29.0571 15.3096 29.139 15.1878 29.2426 15.0859C29.344 14.979 29.4665 14.8945 29.6024 14.8376C29.7383 14.7807 29.8846 14.7528 30.0319 14.7555H32.8355C32.9829 14.7527 33.1293 14.7806 33.2653 14.8375C33.4013 14.8943 33.5239 14.979 33.6254 15.0859C33.729 15.1878 33.811 15.3096 33.8664 15.4439C33.9219 15.5782 33.9497 15.7223 33.9482 15.8676V18.5261L33.9466 18.5277Z"
                                        fill="#808080"
                                    />
                                </svg>
                            </Link>
                        </div>

                </div>

                <div className="navbar_mobile">

                    <div className="nav_navigation">
                        <Link
                            to='/' className="nav_logo" onClick={closeMobileMenu} >
                            <img src={logo} className="nav_logo_pic" alt="logo"/>
                        </Link>

                        <div
                            className="menu_open"
                            onClick={showSidebar}
                        >
                            <Link to="/" className="menu_open_link"  >
                                <h2 className="menu_open_h2"  > &#9776; </h2>
                            </Link>
                        </div>

                        <div className="nav_icon">
                            <Link to='/' className="nav_icon_link" onClick={closeMobileMenu}>
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >

                                    <path
                                        d="M39 14.8505C37.8742 15.3361 36.6807 15.6523 35.4593 15.7885C36.7535 15.0484 37.7182 13.8569 38.1626 12.45C36.9578 13.1571 35.6369 13.6521 34.2593 13.9125C33.6946 13.3207 33.0149 12.8466 32.2605 12.5182C31.5062 12.1899 30.6925 12.0139 29.8678 12.0008C29.0431 11.9877 28.2241 12.1377 27.4594 12.4419C26.6947 12.7461 25.9998 13.1984 25.4159 13.7719C24.8346 14.3272 24.3751 14.9938 24.0656 15.7306C23.7562 16.4675 23.6033 17.2589 23.6165 18.0561C23.6193 18.522 23.6714 18.9863 23.7717 19.4416C21.3043 19.3305 18.8904 18.6953 16.6957 17.5798C14.5297 16.4906 12.6192 14.9674 11.087 13.108C10.5319 14.0333 10.2425 15.0896 10.2496 16.1641C10.242 17.1738 10.4978 18.1686 10.9924 19.0532C11.4699 19.9217 12.1562 20.6619 12.9913 21.2091C12.0155 21.1751 11.0622 20.9109 10.2117 20.4387V20.5138C10.1922 21.9217 10.6889 23.2894 11.6107 24.366C12.5029 25.4483 13.7527 26.1881 15.1422 26.4564C14.614 26.5932 14.0702 26.6624 13.5241 26.6625C13.1369 26.6592 12.7504 26.6277 12.3678 26.5681C12.7627 27.7703 13.529 28.8212 14.5597 29.574C15.5904 30.3269 16.8342 30.7441 18.1174 30.7676C15.9511 32.4696 13.2545 33.3835 10.483 33.355C9.98768 33.358 9.49254 33.3333 9 33.2812C11.8079 35.0795 15.0912 36.0248 18.4409 35.9995C20.5343 36.0143 22.6143 35.6689 24.587 34.9787C26.3795 34.3672 28.0441 33.4395 29.4991 32.2411C30.8564 31.0984 32.0394 29.7693 33.0117 28.2945C33.9722 26.8558 34.7129 25.286 35.2102 23.6354C35.6872 22.0557 35.9312 20.4168 35.9348 18.7688C35.9348 18.4187 35.9285 18.1561 35.9159 17.981C37.1199 17.1207 38.1634 16.0615 39 14.8505Z"
                                        fill="#808080"
                                    />
                                </svg>
                            </Link>

                            <Link to='/' className="nav_icon_link" onClick={closeMobileMenu}>
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M35.8157 12.9348C35.526 12.6342 35.1777 12.3962 34.7923 12.2355C34.407 12.0747 33.9928 11.9947 33.5753 12.0003H15.1747C14.7573 11.9948 14.3432 12.0749 13.958 12.2357C13.5728 12.3964 13.2246 12.6344 12.9348 12.9348C12.6343 13.2245 12.3963 13.5727 12.2355 13.9579C12.0748 14.3432 11.9947 14.7573 12.0003 15.1747V33.5753C11.9947 33.9927 12.0748 34.4068 12.2355 34.7921C12.3963 35.1773 12.6343 35.5255 12.9348 35.8152C13.2245 36.1157 13.5727 36.3536 13.958 36.5144C14.3432 36.6751 14.7573 36.7552 15.1747 36.7497H33.5753C34.4158 36.7452 35.2206 36.4093 35.815 35.815C36.4093 35.2206 36.7452 34.4159 36.7497 33.5753V15.1747C36.7553 14.7573 36.6753 14.3433 36.5147 13.958C36.354 13.5728 36.1161 13.2246 35.8157 12.9348ZM20.8869 20.9187C21.3475 20.4618 21.8949 20.1017 22.4968 19.8596C23.0987 19.6175 23.743 19.4983 24.3917 19.509C25.0429 19.4973 25.69 19.6161 26.2947 19.8583C26.8993 20.1004 27.4494 20.4612 27.9126 20.9192C28.3735 21.3591 28.7403 21.888 28.991 22.4737C29.2417 23.0595 29.3709 23.69 29.3709 24.3271C29.3709 24.9643 29.2417 25.5948 28.991 26.1805C28.7403 26.7663 28.3735 27.2951 27.9126 27.735C27.4495 28.1931 26.8994 28.5539 26.2947 28.7961C25.69 29.0383 25.043 29.157 24.3917 29.1452C23.743 29.1558 23.0987 29.0365 22.4968 28.7944C21.8949 28.5522 21.3475 28.192 20.8869 27.735C20.4259 27.2951 20.0589 26.7663 19.8081 26.1805C19.5574 25.5947 19.4281 24.9641 19.4281 24.3269C19.4281 23.6896 19.5574 23.059 19.8081 22.4732C20.0589 21.8874 20.4259 21.3586 20.8869 20.9187ZM33.9466 32.9168C33.9495 33.0471 33.9252 33.1766 33.8753 33.2971C33.8253 33.4175 33.7509 33.5262 33.6566 33.6162C33.5658 33.7072 33.4577 33.7791 33.3387 33.8275C33.2196 33.8759 33.0921 33.9 32.9636 33.8982H15.7385C15.6087 33.9008 15.4797 33.8772 15.3592 33.8287C15.2388 33.7802 15.1294 33.7079 15.0376 33.6161C14.9458 33.5243 14.8734 33.4149 14.825 33.2945C14.7765 33.174 14.7529 33.045 14.7555 32.9152V22.4736H17.0271C16.8112 23.1563 16.7023 23.8683 16.7043 24.5843C16.6908 25.573 16.8846 26.5536 17.2734 27.4628C17.6621 28.372 18.2372 29.1896 18.9613 29.8629C19.6749 30.571 20.523 31.1289 21.4557 31.5039C22.3883 31.8789 23.3866 32.0633 24.3917 32.0463C25.746 32.0568 27.0795 31.7121 28.259 31.0466C29.4163 30.4039 30.3834 29.4673 31.0627 28.3312C31.7463 27.2018 32.1033 25.905 32.0941 24.5848C32.096 23.8688 31.9872 23.1568 31.7713 22.4741H33.9466V32.9152V32.9168ZM33.9466 18.5277C33.9482 18.6742 33.9205 18.8195 33.8652 18.9552C33.8098 19.0909 33.728 19.2141 33.6244 19.3178C33.5208 19.4214 33.3976 19.5033 33.262 19.5587C33.1263 19.6141 32.981 19.6418 32.8345 19.6403H30.0313C29.8849 19.6418 29.7397 19.6141 29.6042 19.5588C29.4686 19.5035 29.3455 19.4216 29.242 19.3181C29.1384 19.2146 29.0566 19.0915 29.0013 18.9559C28.946 18.8204 28.9182 18.6751 28.9198 18.5288V15.8676C28.9183 15.7223 28.9461 15.5782 29.0016 15.4439C29.0571 15.3096 29.139 15.1878 29.2426 15.0859C29.344 14.979 29.4665 14.8945 29.6024 14.8376C29.7383 14.7807 29.8846 14.7528 30.0319 14.7555H32.8355C32.9829 14.7527 33.1293 14.7806 33.2653 14.8375C33.4013 14.8943 33.5239 14.979 33.6254 15.0859C33.729 15.1878 33.811 15.3096 33.8664 15.4439C33.9219 15.5782 33.9497 15.7223 33.9482 15.8676V18.5261L33.9466 18.5277Z"
                                        fill="#808080"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className={sidebar ? "nav_menu active" : "nav_menu"}
                         style={{ zIndex:  sidebar ? 8 : 1 }}

                    >

                        <div className="nav_menu_items" >
                            <div className="menu_close" onClick={showSidebar}>
                                <Link to="/" className="menu_close_link"  >
                                    <h2 className="menu_close_h2"> &#215;</h2>
                                </Link>
                            </div>

                            <div className="nav_mobile" onClick={closeMobileMenu}>
                                <ul className="nav_mobile_ul"   >
                                    <li className="nav_mobile_li" >
                                        <Link className="nav_mobile_link" to="/" > Продукты         </Link>
                                    </li>
                                    <li className="nav_mobile_li" >
                                        <Link className="nav_mobile_link" to="/" > Технология      </Link>
                                    </li>
                                    <li className="nav_mobile_li" >
                                        <Link className="nav_mobile_link" to="/" > Experience  </Link>
                                    </li>
                                </ul>

                                <div className="nav_icon">
                                    <Link to='/' className="nav_icon_link" onClick={closeMobileMenu}>
                                        <svg
                                            width="48"
                                            height="48"
                                            viewBox="0 0 48 48"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >

                                            <path
                                                d="M39 14.8505C37.8742 15.3361 36.6807 15.6523 35.4593 15.7885C36.7535 15.0484 37.7182 13.8569 38.1626 12.45C36.9578 13.1571 35.6369 13.6521 34.2593 13.9125C33.6946 13.3207 33.0149 12.8466 32.2605 12.5182C31.5062 12.1899 30.6925 12.0139 29.8678 12.0008C29.0431 11.9877 28.2241 12.1377 27.4594 12.4419C26.6947 12.7461 25.9998 13.1984 25.4159 13.7719C24.8346 14.3272 24.3751 14.9938 24.0656 15.7306C23.7562 16.4675 23.6033 17.2589 23.6165 18.0561C23.6193 18.522 23.6714 18.9863 23.7717 19.4416C21.3043 19.3305 18.8904 18.6953 16.6957 17.5798C14.5297 16.4906 12.6192 14.9674 11.087 13.108C10.5319 14.0333 10.2425 15.0896 10.2496 16.1641C10.242 17.1738 10.4978 18.1686 10.9924 19.0532C11.4699 19.9217 12.1562 20.6619 12.9913 21.2091C12.0155 21.1751 11.0622 20.9109 10.2117 20.4387V20.5138C10.1922 21.9217 10.6889 23.2894 11.6107 24.366C12.5029 25.4483 13.7527 26.1881 15.1422 26.4564C14.614 26.5932 14.0702 26.6624 13.5241 26.6625C13.1369 26.6592 12.7504 26.6277 12.3678 26.5681C12.7627 27.7703 13.529 28.8212 14.5597 29.574C15.5904 30.3269 16.8342 30.7441 18.1174 30.7676C15.9511 32.4696 13.2545 33.3835 10.483 33.355C9.98768 33.358 9.49254 33.3333 9 33.2812C11.8079 35.0795 15.0912 36.0248 18.4409 35.9995C20.5343 36.0143 22.6143 35.6689 24.587 34.9787C26.3795 34.3672 28.0441 33.4395 29.4991 32.2411C30.8564 31.0984 32.0394 29.7693 33.0117 28.2945C33.9722 26.8558 34.7129 25.286 35.2102 23.6354C35.6872 22.0557 35.9312 20.4168 35.9348 18.7688C35.9348 18.4187 35.9285 18.1561 35.9159 17.981C37.1199 17.1207 38.1634 16.0615 39 14.8505Z"
                                                fill="#808080"
                                            />
                                        </svg>
                                    </Link>

                                    <Link to='/' className="nav_icon_link" onClick={closeMobileMenu}>
                                        <svg className="icon"
                                             width="48"
                                             height="48"
                                             viewBox="0 0 48 48"
                                             xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M35.8157 12.9348C35.526 12.6342 35.1777 12.3962 34.7923 12.2355C34.407 12.0747 33.9928 11.9947 33.5753 12.0003H15.1747C14.7573 11.9948 14.3432 12.0749 13.958 12.2357C13.5728 12.3964 13.2246 12.6344 12.9348 12.9348C12.6343 13.2245 12.3963 13.5727 12.2355 13.9579C12.0748 14.3432 11.9947 14.7573 12.0003 15.1747V33.5753C11.9947 33.9927 12.0748 34.4068 12.2355 34.7921C12.3963 35.1773 12.6343 35.5255 12.9348 35.8152C13.2245 36.1157 13.5727 36.3536 13.958 36.5144C14.3432 36.6751 14.7573 36.7552 15.1747 36.7497H33.5753C34.4158 36.7452 35.2206 36.4093 35.815 35.815C36.4093 35.2206 36.7452 34.4159 36.7497 33.5753V15.1747C36.7553 14.7573 36.6753 14.3433 36.5147 13.958C36.354 13.5728 36.1161 13.2246 35.8157 12.9348ZM20.8869 20.9187C21.3475 20.4618 21.8949 20.1017 22.4968 19.8596C23.0987 19.6175 23.743 19.4983 24.3917 19.509C25.0429 19.4973 25.69 19.6161 26.2947 19.8583C26.8993 20.1004 27.4494 20.4612 27.9126 20.9192C28.3735 21.3591 28.7403 21.888 28.991 22.4737C29.2417 23.0595 29.3709 23.69 29.3709 24.3271C29.3709 24.9643 29.2417 25.5948 28.991 26.1805C28.7403 26.7663 28.3735 27.2951 27.9126 27.735C27.4495 28.1931 26.8994 28.5539 26.2947 28.7961C25.69 29.0383 25.043 29.157 24.3917 29.1452C23.743 29.1558 23.0987 29.0365 22.4968 28.7944C21.8949 28.5522 21.3475 28.192 20.8869 27.735C20.4259 27.2951 20.0589 26.7663 19.8081 26.1805C19.5574 25.5947 19.4281 24.9641 19.4281 24.3269C19.4281 23.6896 19.5574 23.059 19.8081 22.4732C20.0589 21.8874 20.4259 21.3586 20.8869 20.9187ZM33.9466 32.9168C33.9495 33.0471 33.9252 33.1766 33.8753 33.2971C33.8253 33.4175 33.7509 33.5262 33.6566 33.6162C33.5658 33.7072 33.4577 33.7791 33.3387 33.8275C33.2196 33.8759 33.0921 33.9 32.9636 33.8982H15.7385C15.6087 33.9008 15.4797 33.8772 15.3592 33.8287C15.2388 33.7802 15.1294 33.7079 15.0376 33.6161C14.9458 33.5243 14.8734 33.4149 14.825 33.2945C14.7765 33.174 14.7529 33.045 14.7555 32.9152V22.4736H17.0271C16.8112 23.1563 16.7023 23.8683 16.7043 24.5843C16.6908 25.573 16.8846 26.5536 17.2734 27.4628C17.6621 28.372 18.2372 29.1896 18.9613 29.8629C19.6749 30.571 20.523 31.1289 21.4557 31.5039C22.3883 31.8789 23.3866 32.0633 24.3917 32.0463C25.746 32.0568 27.0795 31.7121 28.259 31.0466C29.4163 30.4039 30.3834 29.4673 31.0627 28.3312C31.7463 27.2018 32.1033 25.905 32.0941 24.5848C32.096 23.8688 31.9872 23.1568 31.7713 22.4741H33.9466V32.9152V32.9168ZM33.9466 18.5277C33.9482 18.6742 33.9205 18.8195 33.8652 18.9552C33.8098 19.0909 33.728 19.2141 33.6244 19.3178C33.5208 19.4214 33.3976 19.5033 33.262 19.5587C33.1263 19.6141 32.981 19.6418 32.8345 19.6403H30.0313C29.8849 19.6418 29.7397 19.6141 29.6042 19.5588C29.4686 19.5035 29.3455 19.4216 29.242 19.3181C29.1384 19.2146 29.0566 19.0915 29.0013 18.9559C28.946 18.8204 28.9182 18.6751 28.9198 18.5288V15.8676C28.9183 15.7223 28.9461 15.5782 29.0016 15.4439C29.0571 15.3096 29.139 15.1878 29.2426 15.0859C29.344 14.979 29.4665 14.8945 29.6024 14.8376C29.7383 14.7807 29.8846 14.7528 30.0319 14.7555H32.8355C32.9829 14.7527 33.1293 14.7806 33.2653 14.8375C33.4013 14.8943 33.5239 14.979 33.6254 15.0859C33.729 15.1878 33.811 15.3096 33.8664 15.4439C33.9219 15.5782 33.9497 15.7223 33.9482 15.8676V18.5261L33.9466 18.5277Z"
                                                fill="#808080"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;