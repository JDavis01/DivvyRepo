import './styling/Layout.css';
import { Outlet, Link } from "react-router-dom";
import { Divider, Flex, Text } from '@aws-amplify/ui-react';

const Layout = () => {
    return (
        <>
            <Flex justifyContent={'space-around'} alignContent={'center'}
            margin={20}>
                <Link to="/"><Text>Home</Text></Link>
                <Divider orientation='vertical'></Divider>
                <Link to="/dashboard"><Text>Sign In</Text></Link>
                <Divider orientation='vertical'></Divider>
                <Link to="/contact"><Text>Contact</Text></Link>
            </Flex>
            <Outlet />
        </>
    )
};

export default Layout;