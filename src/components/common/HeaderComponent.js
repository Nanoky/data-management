import { useEffect, useState } from "react";
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { TextLink } from "./TextLink";

const getWidth = () => window.innerWidth 
|| document.documentElement.clientWidth 
|| document.body.clientWidth;

export const Header = ({brand, ...props}) => {
    const [open, setOpen] = useState(
        (props.expand) ? 
            (props.expand == "sm" ||
            props.expand == "md" || 
            props.expand == "lg" || 
            props.expand == true
            ) 
        : false
    );

    const [width, setWidth] = useState(getWidth());
    const resize = () => {
        setWidth(getWidth());
    }

    useEffect(() => {
        window.addEventListener("resize", resize);

        let expand = (props.expand) ? 
            (props.expand == "sm" ||
            props.expand == "md" || 
            props.expand == "lg" || 
            props.expand == true
            ) 
        : false;


        setOpen((width < 800) ? false : expand);

        return () => {
            window.removeEventListener('resize', resize);
        }
    });

    return (
        <div>
            <Navbar {...props} expand={open}>
                <NavbarToggler onClick={() => {setOpen(!open)}} />
                <Collapse navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink>
                                <TextLink to="/">
                                    Home
                                </TextLink>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <TextLink to="/items">
                                    Items
                                </TextLink>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}