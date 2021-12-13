import React, {useEffect, useState} from "react";
import "../css/style.css";
import "../css/style_mobile.css";

import backgroundPic from "../pic/bg.webp";

import Navbar from "./Navbar";
import Popup from "./Popup/Popup";

const Landing = () => {

    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = () => {
        setVisibility(false);
    };

    useEffect(() => {
        setTimeout(() => {
            setVisibility(  true);
        }, 2000);

    }, []);

    return (
        <div className="landing_section">
            <Navbar/>

            <div className="background_container">
                <img src={backgroundPic} alt=" background_picture" className="background_pic"/>
            </div>

            <div className="content_container">

                <div className="title_container">
                    <h1  className="title_h1"> ПРЕИМУЩЕСТВА G-SYNC </h1>
                    <h3  className="title_h3"> Каждый монитор с технологией G-SYNC проходит серьезное тестирование и контроль качества для обеспечения максимальной производительности. Сотни мониторов проходят контроль качества, но только прошедшие все тесты получают сертификацию G-SYNC. </h3>
                </div>

                <div className="part_container">
                    <div className="part_sector">
                        <svg
                            className="part_pic"
                            width="160"
                            height="90"
                            viewBox="0 0 160 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.35388 46.075C6.19763 45.8842 6.05746 45.7104 5.9334 45.5546C6.08294 45.386 6.25391 45.1955 6.44607 44.9845C7.31029 44.0352 8.60244 42.6718 10.3 41.032C13.6962 37.7513 18.7082 33.3712 25.1555 28.9907C38.0563 20.2256 56.6409 11.5 79.5 11.5C103.873 11.5 122.454 20.2359 134.953 28.9791C141.204 33.3519 145.928 37.723 149.085 40.9946C150.662 42.6299 151.847 43.989 152.633 44.934C152.84 45.1823 153.019 45.402 153.17 45.5905C153.057 45.7617 152.926 45.9572 152.776 46.1751C152.132 47.1106 151.145 48.4597 149.786 50.085C147.07 53.3361 142.873 57.6876 136.983 62.044C125.218 70.7453 106.651 79.5 79.5 79.5C54.8747 79.5 36.295 70.7624 23.8626 62.0229C17.6442 57.6515 12.9679 53.282 9.85147 50.012C8.2937 48.3775 7.12711 47.0192 6.35388 46.075Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <circle
                                cx="81"
                                cy="45" r="24.5"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <circle
                                cx="81"
                                cy="45" r="21.5"
                                stroke="#77B900"
                                strokeWidth="3"
                            />
                            <circle
                                cx="81"
                                cy="45" r="9.5"
                                stroke="#77B900"
                                strokeWidth="5"
                            />
                            <circle
                                cx="100"
                                cy="32" r="7"
                                fill="white"
                            />
                        </svg>


                        <div className="part_text">
                            <h2  className="part_h2_active"> HDR </h2>
                            <h2  className="part_h2"> DISPLAY. </h2>
                        </div>
                        <p className="part_p">
                            Получите более широкий и комфортный для восприятия диапазон цветовой гаммы, чем в обычных мониторах.
                        </p>

                    </div>
                    <div className="part_sector">
                        <svg
                            className="part_pic"
                            width="160"
                            height="90"
                            viewBox="0 0 160 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.35388 46.075C6.19763 45.8842 6.05746 45.7104 5.9334 45.5546C6.08294 45.386 6.25391 45.1955 6.44607 44.9845C7.31029 44.0352 8.60244 42.6718 10.3 41.032C13.6962 37.7513 18.7082 33.3712 25.1555 28.9907C38.0563 20.2256 56.6409 11.5 79.5 11.5C103.873 11.5 122.454 20.2359 134.953 28.9791C141.204 33.3519 145.928 37.723 149.085 40.9946C150.662 42.6299 151.847 43.989 152.633 44.934C152.84 45.1823 153.019 45.402 153.17 45.5905C153.057 45.7617 152.926 45.9572 152.776 46.1751C152.132 47.1106 151.145 48.4597 149.786 50.085C147.07 53.3361 142.873 57.6876 136.983 62.044C125.218 70.7453 106.651 79.5 79.5 79.5C54.8747 79.5 36.295 70.7624 23.8626 62.0229C17.6442 57.6515 12.9679 53.282 9.85147 50.012C8.2937 48.3775 7.12711 47.0192 6.35388 46.075Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <circle cx="81" cy="45" r="24.5" stroke="white" strokeWidth="3"/>
                            <circle cx="81" cy="45" r="21.5" stroke="#77B900" strokeWidth="3"/>
                            <path d="M81 28.5V45H94" stroke="#77B900" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <div className="part_text">
                            <h2  className="part_h2_active"> INPUT </h2>
                            <h2  className="part_h2"> LAG. </h2>
                        </div>
                        <p className="part_p">
                            Мониторы с технологией G-SYNC обеспечивают минимальную задержку между нажатием клавиш и результатом на экране, что очень важно для геймеров.
                        </p>
                    </div>
                    <div className="part_sector">
                        <svg
                            className="part_pic"
                            width="160"
                            height="90"
                            viewBox="0 0 160 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.35388 46.075C6.19763 45.8842 6.05746 45.7104 5.9334 45.5546C6.08294 45.386 6.25391 45.1955 6.44607 44.9845C7.31029 44.0352 8.60244 42.6718 10.3 41.032C13.6962 37.7513 18.7082 33.3712 25.1555 28.9907C38.0563 20.2256 56.6409 11.5 79.5 11.5C103.873 11.5 122.454 20.2359 134.953 28.9791C141.204 33.3519 145.928 37.723 149.085 40.9946C150.662 42.6299 151.847 43.989 152.633 44.934C152.84 45.1823 153.019 45.402 153.17 45.5905C153.057 45.7617 152.926 45.9572 152.776 46.1751C152.132 47.1106 151.145 48.4597 149.786 50.085C147.07 53.3361 142.873 57.6876 136.983 62.044C125.218 70.7453 106.651 79.5 79.5 79.5C54.8747 79.5 36.295 70.7624 23.8626 62.0229C17.6442 57.6515 12.9679 53.282 9.85147 50.012C8.2937 48.3775 7.12711 47.0192 6.35388 46.075Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <path
                                d="M115.967 41.7183C114.915 29.459 105.088 19.7243 92.7893 18.7945C100.688 23.0493 106.058 31.3922 106.058 40.9915C106.058 41.2377 106.027 41.4745 106.02 41.7183H97.9286L110.419 57.7938L123.91 41.7183H115.967Z"
                                fill="white"
                            />
                            <path
                                d="M54.6808 51.0085C54.6808 50.7355 54.7112 50.4707 54.7205 50.2012H63.0713L50.5823 34.1257L37.0898 50.2012H44.7653C45.7827 62.4978 55.6235 72.2757 67.947 73.2067C60.0498 68.9495 54.6808 60.6078 54.6808 51.0085Z"
                                fill="white"
                            />
                            <path
                                d="M88 30H71V47H76L74.5 65.25L90 44H78L88 30Z"
                                fill="#77B900"
                            />
                        </svg>

                        <div className="part_text">
                            <h2  className="part_h2_active"> HIGH </h2>
                            <h2  className="part_h2"> REFRESH RATE. </h2>
                        </div>
                        <p className="part_p"> NVIDIA тесно сотрудничает с производителями мониторов, чтобы вывести на рынок широкий спектр дисплеев с высокой частотой обновления экрана от 75 до 360 Гц. </p>

                    </div>
                    <div className="part_sector">
                        <svg
                            className="part_pic"
                            width="160"
                            height="90"
                            viewBox="0 0 160 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.35388 46.075C6.19763 45.8842 6.05746 45.7104 5.9334 45.5546C6.08294 45.386 6.25391 45.1955 6.44607 44.9845C7.31029 44.0352 8.60244 42.6718 10.3 41.032C13.6962 37.7513 18.7082 33.3712 25.1555 28.9907C38.0563 20.2256 56.6409 11.5 79.5 11.5C103.873 11.5 122.454 20.2359 134.953 28.9791C141.204 33.3519 145.928 37.723 149.085 40.9946C150.662 42.6299 151.847 43.989 152.633 44.934C152.84 45.1823 153.019 45.402 153.17 45.5905C153.057 45.7617 152.926 45.9572 152.776 46.1751C152.132 47.1106 151.145 48.4597 149.786 50.085C147.07 53.3361 142.873 57.6876 136.983 62.044C125.218 70.7453 106.651 79.5 79.5 79.5C54.8747 79.5 36.295 70.7624 23.8626 62.0229C17.6442 57.6515 12.9679 53.282 9.85147 50.012C8.2937 48.3775 7.12711 47.0192 6.35388 46.075Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <circle cx="79.5" cy="37.5" r="11.5" fill="#77B900" fillOpacity="0.75" stroke="white" strokeWidth="2"/>
                            <circle cx="70.5" cy="52.5" r="11.5" fill="#77B900" fillOpacity="0.5" stroke="white" strokeWidth="2"/>
                            <circle cx="88.5" cy="52.5" r="11.5" fill="white" fillOpacity="0.45" stroke="white" strokeWidth="2"/>
                        </svg>


                        <div className="part_text">
                            <h2  className="part_h2_active"> WIDE COLOR </h2>
                            <h2  className="part_h2"> GAMUT. </h2>
                        </div>
                        <p className="part_p"> Современные мониторы G-SYNC ULTIMATE поддерживают цветовой охват DCI-P3, обеспечивая более реалистичную цветопередачу с плавными переходами. </p>

                    </div>
                </div>

                <button
                    onClick={() => setVisibility(true)}
                    className="popup_button"
                    style={{ zIndex:  visibility ? -1 : 5,   }}

                >
                    <h2 className="popup_button_h2" > POPUP </h2>
                </button>

            </div>

            <div
                className="popup_section"
                style={{ zIndex:  visibility ? 9 : -1,   }}
            >
                    <Popup
                        onClose={popupCloseHandler}
                        show={visibility}
                        title="AUTHORIZATION"
                    />

            </div>

        </div>
    );
}

export default Landing;