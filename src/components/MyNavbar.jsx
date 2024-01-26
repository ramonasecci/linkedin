import "../style/NavBar.css";
import MyModale from "./MyModale";
import Container from "react-bootstrap/Container";
import {
    DropdownItem,
    DropdownMenu,
    DropdownDivider,
} from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFilter } from 'react-icons/fa';


const MyNavbar = () => {
    const myInfo = useSelector((state) => state.meInfo.result)
    console.log(myInfo)
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All')
    const all = `search=${searchQuery}`
    const company = `company=${searchQuery}`
    const category = `category=${searchQuery}`


    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            if (filter === "All") {
                navigate("/jobsearchresult/" + all);
                setSearchQuery('')
            } else if (filter === "Company") {
                navigate("/jobsearchresult/" + company);
                setSearchQuery('')
            } else if (filter === "Category") {
                navigate("/jobsearchresult/" + category);
                setSearchQuery('')
            }
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {

            handleSearch();
        }
    };

    const handleFilterSelect = (value) => {
        setFilter(value);
    };

    return (
        <Navbar bg="light" variant="light" className="fixed-top border py-0">
            <Container className="d-flex pr-0">
                <div className="d-flex col col-md-4 align-items-center">
                    <Link to="/" className="me-2">
                        <svg
                            id="logo"
                            className="my-2 ms-3 bi bi-linkedin"
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            fill="#0a66c2"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </Link>

                    <div className="search-container ">
                        <BsSearch className="search-icon ms-2" />
                        <input
                            type="text"
                            placeholder="Cerca"
                            className="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}

                        />
                    </div>
                    <Dropdown as={ButtonGroup} className="ms-1 btn-blu custom-dropdown">
                        <Button variant="primary" className="p-0 ps-1 fw-bold">{filter}</Button>
                        <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" className="p-0" />
                        <Dropdown.Menu>
                            <DropdownItem onClick={() => handleFilterSelect('All')} value="">All</DropdownItem>
                            <DropdownItem onClick={() => handleFilterSelect('Company')} value="">Company</DropdownItem>
                            <DropdownItem onClick={() => handleFilterSelect('Category')} value="x">Category</DropdownItem>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="d-flex col col-12">
                    <ul
                        className="d-flex nav align-items-center justify-content-center"
                        id="navUl"
                    >
                        <li>
                            <Link
                                to="/"
                                className="d-flex flex-column align-items-center justify-content-end"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="#666666"
                                    className="bi bi-house-door-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                                </svg>{" "}
                                <p className="d-none d-lg-inline m-0">Home</p>
                            </Link>
                        </li>
                        <li>
                            <a
                                href="www"
                                className="d-flex flex-column align-items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="#666666"
                                    className="bi bi-people-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                </svg>
                                <p className="d-none d-lg-inline m-0">Rete</p>
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/job"
                                className="d-flex flex-column align-items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="#666666"
                                    className="bi bi-briefcase-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                                </svg>
                                <p className="d-none d-lg-inline m-0">Lavoro</p>
                            </Link>
                        </li>
                        <li>
                            <a
                                href="www"
                                className="d-flex flex-column align-items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="#666666"
                                    className="bi bi-chat-dots"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                </svg>
                                <p className="d-none d-lg-inline m-0">
                                    Messaggistica
                                </p>
                            </a>
                        </li>
                        <li>
                            <a
                                href="www"
                                className="d-flex flex-column align-items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="#666666"
                                    className="bi bi-bell-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                </svg>
                                <p className="d-none d-lg-inline m-0">
                                    Notifiche
                                </p>
                            </a>
                        </li>
                        <li>
                            <div
                                href="www"
                                className="d-flex flex-column align-items-center"
                            >
                                <img
                                    style={{
                                        width: "22px",
                                        height: "22px",
                                        borderRadius: "50%",
                                    }}
                                    src={myInfo.image}
                                    alt="io"
                                />

                                <div className="d-none d-lg-inline tu ">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            Tu
                                        </Dropdown.Toggle>

                                        <DropdownMenu className="dropdown-trasparent ">
                                            <DropdownItem>
                                                <div className="d-flex align-items-center ">
                                                    <img
                                                        src={myInfo.image}
                                                        alt="proPic"
                                                        className="rounded-circle mx-3"
                                                        width={60}
                                                    />
                                                    <Link
                                                        className="dropdown-item"
                                                        to="/profile/me"
                                                    >
                                                        {" "}
                                                        <span
                                                            className="fw-bold"
                                                            style={{
                                                                color: "black",
                                                            }}
                                                        >
                                                            {myInfo.name} {myInfo.surname}
                                                        </span>
                                                        <p
                                                            className="text-black mb-0"
                                                            style={{
                                                                whiteSpace:
                                                                    "pre-wrap",
                                                            }}
                                                        >
                                                            {myInfo.title} presso {myInfo.bio}
                                                        </p>
                                                    </Link>
                                                </div>
                                            </DropdownItem>
                                            <DropdownItem className="pt-0">
                                                <Link to="/profile/me">
                                                    <button
                                                        className="rounded-pill  justify-content-center align-items-baseline  dropbutton"
                                                        style={{}}
                                                        onMouseOver={(e) => {
                                                            e.target.style.backgroundColor =
                                                                "#0a66c2";
                                                            e.target.style.color =
                                                                "white";
                                                            e.target.style.borderColor =
                                                                "#0a66c2";
                                                        }}
                                                        onMouseOut={(e) => {
                                                            e.target.style.backgroundColor =
                                                                "transparent";
                                                            e.target.style.color =
                                                                "";
                                                            e.target.style.borderColor =
                                                                "#0a66c2";
                                                        }}
                                                    >
                                                        Visualizza profilo
                                                    </button>

                                                </Link>
                                            </DropdownItem>
                                            <DropdownDivider />
                                            <DropdownItem disabled>
                                                Account
                                            </DropdownItem>
                                            <DropdownItem>
                                                Prova Premium per 0 EUR{" "}
                                            </DropdownItem>
                                            <DropdownItem>
                                                Impostazioni e privacy
                                            </DropdownItem>
                                            <DropdownItem>Guida</DropdownItem>
                                            <DropdownItem>Lingua</DropdownItem>
                                            <DropdownDivider />
                                            <DropdownItem disabled>
                                                Gestisci
                                            </DropdownItem>
                                            <DropdownItem>
                                                Post e attività
                                            </DropdownItem>
                                            <DropdownItem>
                                                Account per la pubblicazione di
                                                off...
                                            </DropdownItem>
                                            <DropdownDivider />
                                            <DropdownItem>Esci</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        </li>
                        <div className="striscia"></div>
                        <li>
                            <MyModale
                                className=" m-0 d-none d-lg-flex align-items-center justify-content-center"
                                id="aziende"
                            />
                        </li>
                        <a href="www" className="me-5">
                            <li id="lastLi" className="d-none d-lg-block me-5">
                                Prova Premium per 0 EUR.
                            </li>
                        </a>
                    </ul>
                </div>
            </Container>
        </Navbar>
    );
}

export default MyNavbar