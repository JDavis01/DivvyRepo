import {
    Button,
    Text,
    Flex,
    Heading,
    View,
    withAuthenticator,
    Menu,
    MenuItem,
} from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dashboard = ({ signOut }) => {
    const [giveAmt, setGiveAmt] = useState(0);

    return (
        
        <Flex direction="column" alignContent="center"
        alignItems="center" margin={100}>
            <Menu menuAlign="end">
                <MenuItem><Link to="rules">Edit Donation Amount</Link></MenuItem>
            </Menu>
            <View>
                <Heading as="p">How much you are giving currently this month:</Heading>
                <Text as="p">${giveAmt}</Text>
            </View>
            <Button onClick={signOut}>Sign Out</Button>
        </Flex>
    )
};

export default withAuthenticator(Dashboard);