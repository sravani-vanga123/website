import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
    Menu,
    X,
    ChevronDown,
    ChevronRight,
} from "lucide-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useSpring,
} from "framer-motion";
import Logo from "../../assets/image.png";

// ======================================================
// NAVIGATION DATA
// ======================================================

const NAV_ITEMS = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Service",
        path: "#",
        subItems: [
            {
                title: "Education",
                path: "#",
                subItems: [
                    {
                        title: "Career Counselling",
                        path: "/seo-travel",
                    },
                    {
                        title: "Internship",
                        path: "/seo-garments",
                    },
                    {
                        title: "Study Abroad",
                        path: "/seo-ecommerce",
                    },
                    {
                        title: "Training",
                        path: "/seo-professional",
                    },
                    {
                        title: "University Admissions",
                        path: "/seo-local",
                    },
                ],
            },
            {
                title: "Technology",
                path: "/smm",
                subItems: [
                    {
                        title: "Cloud Solutions",
                        path: "/social-media-marketing",
                    },
                     {
                        title: "Cyber Security",
                        path: "/social-media-marketing",
                    },
                    {
                        title: "Digital Marketing",
                        path: "/social-media-marketing",
                    },
                    {
                        title: "UI/Ux Design",
                        path: "/social-media-marketing",
                    },
                  {
                        title: "Web Development",
                        path: "/social-media-marketing",
                    },

                ],
            },
            {
                title: "Immigration",
                path: "#",
                subItems: [
                    {
                        title: "Australia",
                        path: "/web-dev",
                    },
                    {
                        title: "Canada",
                        path: "/ecommerce-website",
                    },
                    {
                        title: "LatviaTrp",
                        path: "/website-maintenance",
                    },
                    
                ],
            },
            {
                title: "Logistics",
                path: "#",
                subItems: [
                    {
                        title: "Freight Forwarding",
                        path: "/corporate-branding",
                    },
                    {
                        title: "Imports & Exports",
                        path: "/personal-branding",
                    },
                   
                ],
            },
            {
                title: "Renewable Energy",
                path: "#",
                subItems: [
                    {
                        title: "Solar",
                        path: "/rms",
                    },
                    
                ],
            },
            {
                title: "Manufacturing",
                path: "#",
                subItems: [
                    {
                        title: "Cosmetics",
                        path: "/ui-ux",
                    },
                    {
                        title: "Electronics",
                        path: "/graphic-design",
                    },
                ],
            },
            ,
        ],
    },
    {
        title: "Portfolios",
        path: "/portfolios",
    },
    {
        title: "Blog",
        path: "/blog",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

// ======================================================
// DESKTOP SUB ITEM
// ======================================================

const DesktopSubItem = ({ item }) => {
    // ==================================================
    // HAS NESTED SUBMENU
    // ==================================================

    if (item.subItems && item.subItems.length > 0) {
        return (
            <li className="relative group">
                {/* Parent submenu item */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        px-4
                        py-3
                        text-sm
                        !text-gray-700
                        hover:!text-black
                        hover:bg-gray-100
                        cursor-pointer
                        transition-all
                        duration-200
                    "
                >
                    <span>{item.title}</span>

                    <ChevronRight
                        className="
                            w-4
                            h-4
                            !text-gray-400
                            group-hover:!text-black
                            transition-colors
                            duration-200
                        "
                    />
                </div>

                {/* Nested flyout */}

                <div
                    className="
                        hidden
                        group-hover:block
                        absolute
                        left-full
                        top-0
                        w-64
                        bg-white
                        rounded-md
                        shadow-xl
                        ring-1
                        ring-black/5
                        z-40
                        py-2
                    "
                >
                    <ul>
                        {item.subItems.map((sub, index) => (
                            <DesktopSubItem
                                key={`${sub.path || sub.title}-${index}`}
                                item={sub}
                            />
                        ))}
                    </ul>
                </div>
            </li>
        );
    }

    // ==================================================
    // DIRECT SUBMENU LINK
    // ==================================================

    return (
        <li>
            <NavLink
                to={item.path}
                className={({ isActive }) =>
                    `
                    block
                    px-4
                    py-3
                    text-sm
                    transition-all
                    duration-200
                    focus:outline-none
                    focus:ring-0
                    ${
                        isActive
                            ? "!text-black !bg-gray-100 font-semibold"
                            : "!text-gray-700 hover:!text-black hover:bg-gray-100"
                    }
                    `
                }
            >
                {item.title}
            </NavLink>
        </li>
    );
};

// ======================================================
// DESKTOP DROPDOWN
// ======================================================

const DesktopDropdown = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);

    return (
        <li
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* ==================================================
                SERVICE BUTTON
            ================================================== */}

            <button
                type="button"
                className="
                    flex
                    items-center
                    gap-1
                    font-medium
                    !text-white
                    hover:!text-black
                    focus:outline-none
                    focus:ring-0
                    transition-colors
                    duration-200
                    py-2
                "
            >
                <span>{item.title}</span>

                <ChevronDown
                    className={`
                        h-4
                        w-4
                        transition-all
                        duration-200
                        ${
                            isOpen
                                ? "rotate-180 !text-black"
                                : "!text-white"
                        }
                    `}
                />
            </button>

            {/* ==================================================
                SERVICE DROPDOWN
            ================================================== */}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: 10,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="
                            absolute
                            left-0
                            top-full
                            mt-2
                            w-64
                            bg-white
                            rounded-md
                            shadow-xl
                            ring-1
                            ring-black/5
                            z-30
                            py-2
                        "
                    >
                        <ul>
                            {item.subItems.map(
                                (subItem, index) => (
                                    <DesktopSubItem
                                        key={`${subItem.path || subItem.title}-${index}`}
                                        item={subItem}
                                    />
                                )
                            )}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    );
};

// ======================================================
// DESKTOP NAV ITEM
// ======================================================

const DesktopNavItem = ({ item }) => {
    return (
        <li>
            <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                    `
                    font-medium
                    transition-colors
                    duration-200
                    focus:outline-none
                    focus:ring-0
                    ${
                        isActive
                            ? "!text-black font-semibold"
                            : "!text-white hover:!text-black"
                    }
                    `
                }
            >
                {item.title}
            </NavLink>
        </li>
    );
};

// ======================================================
// MOBILE NAV ITEM
// ======================================================

const MobileNavItem = ({
    item,
    closeMenu,
    level = 0,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const hasChildren =
        item.subItems &&
        item.subItems.length > 0;

    const linkBase = `
        block
        py-3
        text-base
        font-medium
        transition-colors
        duration-200
        !text-gray-700
        hover:!text-black
        w-full
        text-left
        flex
        justify-between
        items-center
        focus:outline-none
        focus:ring-0
    `;

    const activeClass =
        "!text-black font-semibold";

    const paddingLeft =
        level === 0 ? "" : "pl-4";

    // ==================================================
    // PARENT ITEM
    // ==================================================

    if (hasChildren) {
        return (
            <div
                className={`
                    border-b
                    border-gray-100
                    last:border-0
                    ${paddingLeft}
                `}
            >
                <button
                    type="button"
                    onClick={() =>
                        setIsOpen(!isOpen)
                    }
                    className={linkBase}
                >
                    <span>{item.title}</span>

                    <ChevronDown
                        className={`
                            w-5
                            h-5
                            transition-transform
                            duration-300
                            ${
                                isOpen
                                    ? "rotate-180 !text-black"
                                    : "!text-gray-400"
                            }
                        `}
                    />
                </button>

                {/* ==================================================
                    MOBILE CHILDREN
                ================================================== */}

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{
                                height: 0,
                                opacity: 0,
                            }}
                            animate={{
                                height: "auto",
                                opacity: 1,
                            }}
                            exit={{
                                height: 0,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                            className="overflow-hidden"
                        >
                            <div
                                className="
                                    border-l-2
                                    border-gray-200
                                    ml-2
                                    mb-2
                                "
                            >
                                {item.subItems.map(
                                    (sub, idx) => (
                                        <MobileNavItem
                                            key={`${sub.path || sub.title}-${idx}`}
                                            item={sub}
                                            closeMenu={
                                                closeMenu
                                            }
                                            level={
                                                level + 1
                                            }
                                        />
                                    )
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    // ==================================================
    // DIRECT MOBILE LINK
    // ==================================================

    return (
        <div
            className={`
                border-b
                border-gray-100
                last:border-0
                ${paddingLeft}
            `}
        >
            <NavLink
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                    `
                    ${linkBase}
                    ${
                        isActive
                            ? activeClass
                            : ""
                    }
                    `
                }
            >
                {item.title}
            </NavLink>
        </div>
    );
};

// ======================================================
// MAIN HEADER
// ======================================================

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] =
        useState(false);

    // ==================================================
    // SCROLL PROGRESS
    // ==================================================

    const { scrollYProgress } =
        useScroll();

    const scaleX = useSpring(
        scrollYProgress,
        {
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
        }
    );

    // ==================================================
    // LOCK BODY SCROLL
    // ==================================================

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow =
                "hidden";
        } else {
            document.body.style.overflow =
                "unset";
        }

        return () => {
            document.body.style.overflow =
                "unset";
        };
    }, [isMenuOpen]);

    // ==================================================
    // CLOSE MOBILE MENU
    // ==================================================

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    // ==================================================
    // HEADER
    // ==================================================

    return (
        <>
            <header
                className="
                    sticky
                    top-0
                    z-50
                    bg-[#A202F0]/90
                    shadow-lg
                    backdrop-blur-sm
                    border-b
                    border-white/10
                "
            >
                {/* ==================================================
                    SCROLL PROGRESS
                ================================================== */}

                <motion.div
                    className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        h-1
                        bg-white
                        origin-left
                        z-50
                    "
                    style={{
                        scaleX,
                    }}
                />

                {/* ==================================================
                    CONTAINER
                ================================================== */}

                <div
                    className="
                        container
                        mx-auto
                        px-4
                        sm:px-6
                        lg:px-8
                    "
                >
                    <div
                        className="
                            flex
                            justify-between
                            items-center
                            h-20
                        "
                    >
                        {/* ==================================================
                            LOGO
                        ================================================== */}

                        <div className="flex items-center">
                            <Link
                                to="/"
                                className="
                                    flex
                                    items-center
                                    focus:outline-none
                                "
                            >
                                <img
                                    src={Logo}
                                    alt="Company Logo"
                                    className="
                                        h-14
                                        w-auto
                                        object-contain
                                    "
                                />
                            </Link>
                        </div>

                        {/* ==================================================
                            DESKTOP NAVIGATION
                        ================================================== */}

                        <nav className="hidden lg:flex">
                            <ul
                                className="
                                    flex
                                    items-center
                                    space-x-7
                                "
                            >
                                {NAV_ITEMS.map(
                                    (
                                        item,
                                        index
                                    ) =>
                                        item.subItems ? (
                                            <DesktopDropdown
                                                key={`${item.title}-${index}`}
                                                item={
                                                    item
                                                }
                                            />
                                        ) : (
                                            <DesktopNavItem
                                                key={`${item.path}-${index}`}
                                                item={
                                                    item
                                                }
                                            />
                                        )
                                )}
                            </ul>
                        </nav>

                        {/* ==================================================
                            CTA + MOBILE BUTTON
                        ================================================== */}

                        <div className="flex items-center">
                            {/* Desktop CTA */}

                            <div
                                className="
                                    hidden
                                    lg:flex
                                    items-center
                                    ml-4
                                "
                            >
                                <Link
                                    to="/contact"
                                    className="
                                        px-5
                                        py-2.5
                                        text-sm
                                        font-semibold
                                        rounded-full
                                        !text-white
                                        bg-[#A202F0]
                                        border
                                        border-white/30
                                        hover:bg-white
                                        hover:!text-black
                                        focus:outline-none
                                        focus:ring-0
                                        transition-all
                                        duration-300
                                        shadow-lg
                                        hover:shadow-xl
                                        transform
                                        hover:scale-105
                                    "
                                >
                                    Get Quote
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}

                            <div className="lg:hidden ml-4">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setIsMenuOpen(
                                            !isMenuOpen
                                        )
                                    }
                                    className="
                                        p-2
                                        rounded-md
                                        !text-white
                                        hover:!text-black
                                        hover:bg-white/10
                                        transition-colors
                                        focus:outline-none
                                        focus:ring-0
                                    "
                                >
                                    {isMenuOpen ? (
                                        <X className="h-6 w-6" />
                                    ) : (
                                        <Menu className="h-6 w-6" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* ======================================================
                MOBILE MENU
            ====================================================== */}

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="
                            fixed
                            inset-0
                            z-[60]
                            lg:hidden
                        "
                    >
                        {/* ==================================================
                            BACKDROP
                        ================================================== */}

                        <div
                            className="
                                absolute
                                inset-0
                                bg-black/60
                                backdrop-blur-sm
                            "
                            onClick={
                                closeMobileMenu
                            }
                        />

                        {/* ==================================================
                            MENU PANEL
                        ================================================== */}

                        <motion.div
                            initial={{
                                x: "100%",
                            }}
                            animate={{
                                x: 0,
                            }}
                            exit={{
                                x: "100%",
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="
                                absolute
                                right-0
                                top-0
                                w-[80%]
                                max-w-sm
                                h-full
                                bg-white
                                shadow-2xl
                                flex
                                flex-col
                            "
                        >
                            {/* ==================================================
                                MOBILE HEADER
                            ================================================== */}

                            <div
                                className="
                                    flex
                                    justify-between
                                    items-center
                                    p-6
                                    border-b
                                    border-gray-100
                                "
                            >
                                <Link
                                    to="/"
                                    onClick={
                                        closeMobileMenu
                                    }
                                    className="focus:outline-none"
                                >
                                    <img
                                        src={Logo}
                                        alt="Logo"
                                        className="
                                            h-10
                                            w-auto
                                            object-contain
                                        "
                                    />
                                </Link>

                                <button
                                    type="button"
                                    onClick={
                                        closeMobileMenu
                                    }
                                    className="
                                        p-2
                                        rounded-full
                                        hover:bg-gray-100
                                        transition-colors
                                        focus:outline-none
                                        focus:ring-0
                                    "
                                >
                                    <X
                                        className="
                                            h-6
                                            w-6
                                            !text-gray-600
                                            hover:!text-black
                                        "
                                    />
                                </button>
                            </div>

                            {/* ==================================================
                                MOBILE CONTENT
                            ================================================== */}

                            <div
                                className="
                                    flex-1
                                    overflow-y-auto
                                    p-6
                                "
                            >
                                <nav className="space-y-1">
                                    {NAV_ITEMS.map(
                                        (
                                            item,
                                            idx
                                        ) => (
                                            <MobileNavItem
                                                key={`${item.path}-${idx}`}
                                                item={
                                                    item
                                                }
                                                closeMenu={
                                                    closeMobileMenu
                                                }
                                            />
                                        )
                                    )}
                                </nav>
                            </div>

                            {/* ==================================================
                                MOBILE CTA
                            ================================================== */}

                            <div
                                className="
                                    p-6
                                    border-t
                                    border-gray-100
                                    bg-gray-50
                                "
                            >
                                <Link
                                    to="/contact"
                                    onClick={
                                        closeMobileMenu
                                    }
                                    className="
                                        flex
                                        justify-center
                                        items-center
                                        w-full
                                        px-4
                                        py-3
                                        text-base
                                        font-semibold
                                        rounded-lg
                                        !text-white
                                        bg-[#A202F0]
                                        hover:bg-white
                                        hover:!text-black
                                        border
                                        border-[#A202F0]
                                        shadow-md
                                        transition-all
                                        duration-300
                                        active:scale-95
                                        focus:outline-none
                                        focus:ring-0
                                    "
                                >
                                    Get Quote
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;