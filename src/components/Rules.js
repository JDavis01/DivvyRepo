import { Heading, Flex, Text, TextField, Button, SwitchField } from "@aws-amplify/ui-react";
import "./styling/Rules.css";

const Rules = () => {

    const [income, setIncome] = useState(0.0);
    const [expense, setExpense] = useState(0.0);
    const [debt, setDebt] = useState(0.0);
    const [calcDonation, setCalcDonation] = useState(0.0);
    const [inputDonation, setInputDonation] = useState(0.0);

    const handleCalcSubmit = (e) => {
        setIncome(e.document.getElementById("monthlyIncome"));
        setExpense(e.document.getElementById("monthlyExpense"));
        setDebt(e.document.getElementById("totalDebt"));

        if (income < expense || debt > income * 12) {
            setCalcDonation(10);
        }
        else if (income > expense && debt > income * 12) {
            setCalcDonation(20);
        }
        else if (income - expense > 1000 && income - expense < 2000) {
            setCalcDonation(50);
        }
        else {
            setCalcDonation(100);
        }
    }



    return (
        <Flex id="container">
            <Heading level={5}>How much would you like to donate?</Heading>
            <Text id="message">Thank you for considering making a donation to your causes. We appreciate every
                contribution, no matter the amount. We understand that everyone's financial
                situation is unique, which is why we've created a donation form that can help
                you determine how much you can afford to give.

                Please note that this form is completely optional, and you can choose to simply
                enter the amount you want to donate instead. We understand that financial
                circumstances can change, and any amount you can give is greatly appreciated.

                To help us understand your financial situation and recommend a donation amount,
                please complete the form below by entering your monthly income, monthly expenses,
                and any outstanding debt. This information will only be used to calculate a
                suggested donation amount and will not be shared with any third parties.

                Thank you again for considering making a donation, and we appreciate your
                support in helping us achieve our mission.
            </Text>

            <Flex id="form">
                <TextField id="monthlyIncome" type="number" label="Monthly Income" min={0}></TextField>
                <TextField id="monthlyExpense" type="number" label="Monthly Expenses" min={0}></TextField>
                <TextField id="totalDebt" type="number" label="Total Debt" min={0}></TextField>
                <Button onClick={handleCalcSubmit(e)}>Submit</Button>
            </Flex>
            <SwitchField label="Opt out of form"></SwitchField>
            <TextField type="number" label="Enter the amount you would like to donate." min={0}></TextField>
        </Flex>
    )

}

export default Rules;