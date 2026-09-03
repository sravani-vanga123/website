import { NavLink } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    X,
    Instagram,
    Facebook,
} from "lucide-react";

import Logo from "../../assets/image.png";

// ======================================================
// LOCATION DETAILS
// ======================================================

const LOCATION_DETAILS = [
    "9-7-054, Near Sri Sai Junior College,Bezawada gardens,Yanam-533464",
   
];

// ======================================================
// CONTACT DETAILS
// ======================================================

const CONTACT_DETAILS = [
    {
        type: "Email",
        icon: Mail,
        value: "info@moinconsultancy.com",
        link: "mailto:sales@datait.com.bd",
    },
    {
        type: "Phone-BD",
        icon: Phone,
        value: "+919390605958",
        link: "tel:+8801332776617",
    },
   
];

// ======================================================
// SOCIAL LINKS
// ======================================================

const SOCIAL_LINKS = [
    {
        name: "LinkedIn",
        icon: Linkedin,
        url: "https://www.linkedin.com/company/110905955/",
    },
    {
        name: "X (Twitter)",
        icon: X,
        url: "#",
    },
    {
        name: "Instagram",
        icon: Instagram,
        url: "#",
    },
    {
        name: "Facebook",
        icon: Facebook,
        url: "https://www.facebook.com/profile.php?id=61584198225902",
    },
];

// ======================================================
// POLICY LINKS
// ======================================================

const POLICY_LINKS = [
    {
        name: "Terms of use",
        path: "/terms-of-use",
    },
    {
        name: "Privacy policy",
        path: "/privacy-policy",
    },
    {
        name: "Cookie policy",
        path: "/cookie-policy",
    },
    {
        name: "Refund policy",
        path: "/refund-policy",
    },
];

// ======================================================
// COPYRIGHT
// ======================================================

const COPYRIGHT_YEAR = "2025";

const COPYRIGHT_TEXT = `Copyright © ${COPYRIGHT_YEAR} Moin Consultancy`;

// ======================================================
// REUSABLE DETAIL ITEM
// ======================================================

const DetailItem = ({ Icon, text, link }) => {
    return (
        <a
            href={link}
            className="
                group
                flex
                items-start
                text-sm
                text-gray-400
                hover:text-[#A202F0]
                transition-colors
                duration-300
                mt-3
            "
        >
            <Icon
                className="
                    h-5
                    w-5
                    mr-3
                    flex-shrink-0
                    mt-0.5
                    text-gray-400
                    group-hover:text-[#A202F0]
                    transition-colors
                    duration-300
                "
            />

            <span
                className="
                    leading-relaxed
                    group-hover:text-[#A202F0]
                    transition-colors
                    duration-300
                "
            >
                {text}
            </span>
        </a>
    );
};

// ======================================================
// FOOTER
// ======================================================

const Footer = () => {
    return (
        <footer
            className="
                bg-[#1C2028]
                text-white
                border-t
                border-gray-700
            "
        >
            <div
                className="
                    container
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-8
                    pt-10
                    pb-6
                "
            >
                {/* ==================================================
                    TOP SECTION
                ================================================== */}

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-3
                        gap-8
                        pb-8
                    "
                >
                    {/* ==================================================
                        1. LOGO & SOCIALS
                    ================================================== */}

                    <div
                        className="
                            flex
                            flex-col
                            space-y-4
                        "
                    >
                        {/* Logo */}

                        <div className="w-40">
                            <img
                                src={Logo}
                                alt="Moin consultancy Logo"
                                className="
                                    h-auto
                                    w-full
                                    max-w-xs
                                    object-contain
                                "
                            />
                        </div>

                        {/* Description */}

                        <p
                            className="
                                text-sm
                                text-gray-400
                                max-w-xs
                                leading-relaxed
                            "
                        >
                            Data IT is a full-service technology
                            agency delivering innovative digital
                            solutions for businesses of all sizes.
                        </p>

                        {/* Social Icons */}

                        <div
                            className="
                                flex
                                space-x-4
                                pt-2
                            "
                        >
                            {SOCIAL_LINKS.map(
                                (social) => {
                                    const SocialIcon =
                                        social.icon;

                                    return (
                                        <a
                                            key={
                                                social.name
                                            }
                                            href={
                                                social.url
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={
                                                social.name
                                            }
                                            className="
                                                group
                                                text-white
                                                border
                                                border-white
                                                p-2
                                                rounded-full
                                                hover:bg-white
                                                hover:text-[#A202F0]
                                                transition-all
                                                duration-300
                                            "
                                        >
                                            <SocialIcon
                                                className="
                                                    h-4
                                                    w-4
                                                    transition-colors
                                                    duration-300
                                                "
                                            />
                                        </a>
                                    );
                                }
                            )}
                        </div>
                    </div>

                    {/* ==================================================
                        2. LOCATION
                    ================================================== */}

                    <div>
                        <h3
                            className="
                                text-xl
                                font-bold
                                text-white
                                mb-4
                            "
                        >
                            Location
                        </h3>

                        {LOCATION_DETAILS.map(
                            (address, index) => (
                                <DetailItem
                                    key={index}
                                    Icon={MapPin}
                                    text={address}
                                    link={`https://maps.google.com/?q=${encodeURIComponent(
                                        address
                                    )}`}
                                />
                            )
                        )}
                    </div>

                    {/* ==================================================
                        3. CONTACT US
                    ================================================== */}

                    <div>
                        <h3
                            className="
                                text-xl
                                font-bold
                                text-white
                                mb-4
                            "
                        >
                            Contact Us
                        </h3>

                        {CONTACT_DETAILS.map(
                            (contact) => (
                                <DetailItem
                                    key={contact.type}
                                    Icon={contact.icon}
                                    text={contact.value}
                                    link={contact.link}
                                />
                            )
                        )}
                    </div>
                </div>

                {/* ==================================================
                    BOTTOM BAR
                ================================================== */}

                <div
                    className="
                        border-t
                        border-gray-700
                        pt-6
                        flex
                        flex-col
                        md:flex-row
                        justify-between
                        items-center
                    "
                >
                    {/* ==================================================
                        COPYRIGHT
                    ================================================== */}

                    <p
                        className="
                            text-sm
                            text-gray-500
                            order-2
                            md:order-1
                            mt-4
                            md:mt-0
                        "
                    >
                        {COPYRIGHT_TEXT} | Powered By Moisa Technologies (OPC) Private Limited.
                    </p>

                    {/* ==================================================
                        POLICY LINKS
                    ================================================== */}

                    <ul
                        className="
                            flex
                            flex-wrap
                            justify-center
                            md:justify-end
                            gap-x-6
                            gap-y-2
                            order-1
                            md:order-2
                        "
                    >
                        {POLICY_LINKS.map(
                            (link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `
                                            text-sm
                                            transition-colors
                                            duration-300
                                            focus:outline-none
                                            ${
                                                isActive
                                                    ? "!text-white font-semibold"
                                                    : "!text-[#A202F0] hover:!text-white"
                                            }
                                            `
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;