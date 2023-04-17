import {
    Button,
    View,
    withAuthenticator,
} from "@aws-amplify/ui-react";

const UserPage = ({ signOut }) => {
    return (
        <View className="UserPage">
            <h1>Welcome to your page!</h1>
            <Button onClick={signOut}>Sign Out</Button>
        </View>
    )
};

export default withAuthenticator(UserPage);