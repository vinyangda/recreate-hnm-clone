import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavBar = ({ authenticate }) => {
  const menuList = [
    "여성",
    "남성",
    "Divided",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      console.log("enter");
      //입력한 검색어를 읽어와서
      let keyword = event.target.value;
      console.log("key", keyword);
      //url을 바꿔준다
      navigate(`/?q=${keyword}`);
      //url만 바뚸듐...
    }
  };

  return (
    <NavBox>
      <LoginButton onClick={goToLogin}>
        {" "}
        <FontAwesomeIcon icon={faUser} />
        <div>{authenticate === false ? "Login" : "Logout"}</div>
      </LoginButton>
      <div className="nav-section">
        <Img
          onClick={goToHome}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
        />
      </div>
      <div className="nav-menu">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="nav-search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </NavBox>
  );
};

export default NavBar;

const NavBox = styled.div`
  width: 100vw;
  > .nav-section {
    display: flex;
    justify-content: center;
  }
  .nav-menu {
    display: flex;
    justify-content: center;
  }

  .menu-list {
    display: flex;
    list-style-type: none;
    > li {
      padding: 5px;
    }
  }

  > .nav-search {
    display: flex;
    justify-content: flex-end;
  }
`;

const LoginButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 50px;
`;
