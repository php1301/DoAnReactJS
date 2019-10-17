import React, { Component } from 'react';
import "../Hotline/Hotline.scss";
import "../Hotline/animate.min.scss";
export default class Hotline extends Component {

    render() {

        return (
            <div>
                <title>Contact us - multifunctional contact button</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <div
                    id="contact"
                    className="arcontactus-widget arcontactus-message right sm active arcuAnimated"
                >
                    {/*noindex*/}
                    <div className="callback-countdown-block" style={{ color: "#f26364" }}>
                        <div
                            className="callback-countdown-block-close"
                            style={{ backgroundColor: "#f26364", color: "#FFFFFF" }}
                        >
                            <svg
                                width={12}
                                height={13}
                                viewBox="0 0 14 14"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <g transform="translate(-4087 108)">
                                    <g>
                                        <path
                                            transform="translate(4087 -108)"
                                            fill="currentColor"
                                            d="M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="callback-countdown-block-phone">
                            <p>
                                Please enter your phone number
                    <br />
                                and we call you back soon
                  </p>
                            <form id="arcu-callback-form" action="server.php" method="POST">
                                <div className="callback-countdown-block-form-group">
                                    <input name="action" type="hidden" defaultValue="callback" />
                                    <input
                                        name="gtoken"
                                        className="ar-g-token"
                                        type="hidden"
                                        defaultValue
                                    />
                                    <div className="arcu-form-group arcu-form-group-type-text arcu-form-group-name">
                                        <input
                                            name="name"
                                            className="arcu-form-field arcu-field-name"
                                            type="text"
                                            defaultValue
                                            placeholder="Enter your name (optional)"
                                        />
                                    </div>
                                    <div className="arcu-form-group arcu-form-group-type-text arcu-form-group-email">
                                        <input
                                            name="email"
                                            className="arcu-form-field arcu-field-email"
                                            type="text"
                                            defaultValue
                                            placeholder="Enter your email (optional)"
                                        />
                                    </div>
                                    <div className="arcu-form-group arcu-form-group-type-dropdown arcu-form-group-select">
                                        <div className="arcu-form-label">Select field</div>
                                        <select
                                            name="select"
                                            className="arcu-form-field arcu-field-select"
                                            value
                                            placeholder="Enter your email (optional)"
                                        >
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                        </select>
                                    </div>
                                    <div className="arcu-form-group arcu-form-group-type-tel arcu-form-group-phone arcu-form-group-required">
                                        <input
                                            name="phone"
                                            className="arcu-form-field arcu-field-phone"
                                            required="required"
                                            type="tel"
                                            defaultValue
                                            placeholder="+XXX-XX-XXX-XX-XX"
                                        />
                                    </div>
                                    <div className="arcu-form-group arcu-form-group-type-checkbox arcu-form-group-gdpr arcu-form-group-required">
                                        <div className="arcu-form-label">I accept GDPR rules</div>
                                        <input
                                            name="gdpr"
                                            className="arcu-form-field arcu-field-gdpr"
                                            required="required"
                                            type="checkbox"
                                            defaultValue
                                        />
                                    </div>
                                    <div className="arcu-form-group arcu-form-button">
                                        <button
                                            id="arcontactus-message-callback-phone-submit"
                                            type="submit"
                                            style={{ backgroundColor: "#f26364" }}
                                        >
                                            Waiting for call
                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="callback-countdown-block-timer">
                            <p>We are calling you to phone</p>
                            <div className="callback-countdown-block-timer_timer" />
                        </div>
                        <div className="callback-countdown-block-sorry">
                            <p>
                                Thank you.
                    <br />
                                We are call you back soon.
                  </p>
                        </div>
                    </div>
                    <div className="messangers-block arcuAnimated sm has-header">
                        <div className="arcu-menu-header" style={{ backgroundColor: "#f26364" }}>
                            How would you like to contact us?
                  <div
                                className="arcu-header-close"
                                style={{ color: "#ffffff", background: "#f26364" }}
                            >
                                <svg
                                    width={12}
                                    height={13}
                                    viewBox="0 0 14 14"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <g transform="translate(-4087 108)">
                                        <g>
                                            <path
                                                transform="translate(4087 -108)"
                                                fill="currentColor"
                                                d="M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="messangers-list-container">
                            <ul className="messangers-list rounded-items">
                                <li>
                                    <a
                                        className="messanger "
                                        rel="nofollow noopener"
                                        href="https://m.me/areamaDevelopment"
                                        target="_blank"
                                    >
                                        <span style={{ backgroundColor: "#31ADFF" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    fill="currentColor"
                                                    d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"
                                                />
                                            </svg>
                                        </span>
                                        <div className="arcu-item-label">
                                            <div className="arcu-item-title">Messenger SVG</div>
                                            <div className="arcu-item-subtitle">
                                                Typically response in 30 minutes
                          </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="messanger "
                                        rel="nofollow noopener"
                                        href="https://m.me/areamaDevelopment"
                                        target="_blank"
                                    >
                                        <span style={{ backgroundColor: "#31ADFF" }}>
                                            <i className="fab fa-facebook-messenger" />
                                        </span>
                                        <div className="arcu-item-label">
                                            <div className="arcu-item-title">Messenger</div>
                                            <div className="arcu-item-subtitle">
                                                Typically response in 30 minutes
                          </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="messanger "
                                        rel="nofollow noopener"
                                        href="https://wa.me/380505109376"
                                        target="_blank"
                                    >
                                        <span style={{ backgroundColor: "#09D261" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    fill="currentColor"
                                                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                                                />
                                            </svg>
                                        </span>
                                        <div className="arcu-item-label">
                                            <div className="arcu-item-title">Whatsapp SVG</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="messanger "
                                        rel="nofollow noopener"
                                        href="https://wa.me/380505109376"
                                        target="_blank"
                                    >
                                        <span style={{ backgroundColor: "#09D261" }}>
                                            <i className="fab fa-whatsapp" />
                                        </span>
                                        <div className="arcu-item-label">
                                            <div className="arcu-item-title">Whatsapp</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="messanger "
                                        rel="nofollow noopener"
                                        href="viber://chat?number=+380505109376"
                                        target="_blank"
                                    >
                                        <span style={{ backgroundColor: "#7c529d" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path
                                                    fill="currentColor"
                                                    d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"
                                                />
                                            </svg>
                                        </span>
                                        <div className="arcu-item-label">
                                            <div className="arcu-item-title">Viber SVG</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="messanger "
                                        rel="nofollow noopener"
                                        href="viber://chat?number=+380505109376"
                                        target="_blank"
                                    >
                                        <span style={{ backgroundColor: "#7c529d" }}>
                                            <i className="fab fa-apple" />
                                        </span>
                                        <div className="arcu-item-label">
                                            <div className="arcu-item-title">Viber</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="messanger "
                                        rel="nofollow noopener"
                                        href="mailto:email@mysite.com"
                                        target="_blank"
                                    >
                                        <span style={{ backgroundColor: "#FF643A" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path
                                                    fill="currentColor"
                                                    d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"
                                                />
                                            </svg>
                                        </span>
                                        <div className="arcu-item-label">
                                            <div className="arcu-item-title">Email us</div>
                                            <div className="arcu-item-subtitle">Send email directly</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="messanger call-back ">
                                        <span style={{ backgroundColor: "#4EB625" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path
                                                    fill="currentColor"
                                                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                                                />
                                            </svg>
                                        </span>
                                        <div className="arcu-item-label">
                                            <div className="arcu-item-title">Callback request</div>
                                            <div className="arcu-item-subtitle">We call you back ASAP</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="arcontactus-message-button no-text"
                        style={{ backgroundColor: "#f26364" }}
                    >
                        <div className="static">
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <g transform="translate(-825 -308)">
                                    <g>
                                        <path
                                            transform="translate(825 308)"
                                            fill="#FFFFFF"
                                            d="M 19 4L 17 4L 17 13L 4 13L 4 15C 4 15.55 4.45 16 5 16L 16 16L 20 20L 20 5C 20 4.45 19.55 4 19 4ZM 15 10L 15 1C 15 0.45 14.55 0 14 0L 1 0C 0.45 0 0 0.45 0 1L 0 15L 4 11L 14 11C 14.55 11 15 10.55 15 10Z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="callback-state" style={{ color: "#f26364" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    fill="currentColor"
                                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                                />
                            </svg>
                        </div>
                        <div className="icons hide">
                            <div
                                className="icons-line"
                                style={{ transform: "translate(-2px, 0px)" }}
                            >
                                <span style={{ color: "#f26364" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path
                                            fill="currentColor"
                                            d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"
                                        />
                                    </svg>
                                </span>
                                <span style={{ color: "#f26364" }}>
                                    <i className="fab fa-facebook-messenger" />
                                </span>
                                <span style={{ color: "#f26364" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path
                                            fill="currentColor"
                                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                                        />
                                    </svg>
                                </span>
                                <span style={{ color: "#f26364" }}>
                                    <i className="fab fa-whatsapp" />
                                </span>
                                <span style={{ color: "#f26364" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            fill="currentColor"
                                            d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"
                                        />
                                    </svg>
                                </span>
                                <span style={{ color: "#f26364" }}>
                                    <i className="fab fa-apple" />
                                </span>
                                <span style={{ color: "#f26364" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            fill="currentColor"
                                            d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"
                                        />
                                    </svg>
                                </span>
                                <span style={{ color: "#f26364" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            fill="currentColor"
                                            d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="arcontactus-close">
                            <svg
                                width={12}
                                height={13}
                                viewBox="0 0 14 14"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <g transform="translate(-4087 108)">
                                    <g>
                                        <path
                                            transform="translate(4087 -108)"
                                            fill="currentColor"
                                            d="M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="pulsation" style={{ backgroundColor: "#f26364" }} />
                        <div className="pulsation" style={{ backgroundColor: "#f26364" }} />
                    </div>
                    <div className="arcontactus-prompt arcu-prompt-side active">
                        <div
                            className="arcontactus-prompt-close"
                            style={{ backgroundColor: "#f26364", color: "#FFFFFF" }}
                        >
                            <svg
                                width={12}
                                height={13}
                                viewBox="0 0 14 14"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <g transform="translate(-4087 108)">
                                    <g>
                                        <path
                                            transform="translate(4087 -108)"
                                            fill="currentColor"
                                            d="M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="arcontactus-prompt-inner">
                            Please visit our best and
                  <br /> greates web site!
                </div>
                    </div>
                    {/*/noindex*/}
                </div>
                <link href="./css/jquery.contactus.css" rel="stylesheet" />
                <link href="./css/animate.min.css" rel="stylesheet" />
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
                    integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
                    crossOrigin="anonymous"
                />
            </div>

        )
    }
}