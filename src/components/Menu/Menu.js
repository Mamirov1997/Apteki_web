import styled from "styled-components";


export const Nav = styled.div`
    padding: 20px 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap:wrap;
    background-color: #6FA21C;
    @media (max-width:768px){
        padding:20px;
    }
`;

export const Toggle = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span{
        height: 2px;
        width: 25px;
        background-color: #ffffff;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width:768px){
        display: flex;
    }
`;

export const LogoLink = styled.a``;

export const Logo = styled.img`
    @media (max-width:768px){
        height: 32px;
        width: 130px;
    }
`;
export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width:768px){
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        display: ${({isOpened})=>(isOpened? "none":"flex")};
        transition: display 0.3s ease-in;
    }
`;
export const NavItem = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    &:hover{
        color: #d3cfcf;
    }
`;
export const NavItemBtn = styled.a`
    background-color: white;
    color:#6FA21C;
    padding: 0.7rem 2rem;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    border-radius: 15px;
    &:hover{
        background-color: #304F42;
        color: white;
    }
`;





