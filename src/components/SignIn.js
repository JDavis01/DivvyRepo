import {
    Button,
    View,
    withAuthenticator,
} from "@aws-amplify/ui-react";
import UserPage from "./UserPage";

const SignIn = ({ signOut }) => {
    return (
        <View className="App">
            <UserPage/>
            <Button onClick={signOut}>Sign Out</Button>
        </View>
    )
};

export default withAuthenticator(SignIn);

