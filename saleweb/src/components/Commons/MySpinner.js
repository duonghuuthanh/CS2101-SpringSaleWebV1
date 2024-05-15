import { Spinner } from "react-bootstrap";

const MySpinner = ({animation="grow", variant="primary" }) => {
    return <Spinner animation={animation} variant={variant} />;
}

export default MySpinner;