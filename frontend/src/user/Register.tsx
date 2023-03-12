import React from "react";
import Navbar from "../mui/Navbar";
import FlexBox from "../mui/FlexBox";
import Card from "../mui/Card";
import Select from "../mui/Select";
import Input from "../mui/Input";
import { Link } from "react-router-dom";

const Register = () => {
  const [cities, setCities] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://data.gov.il/api/3/action/datastore_search?resource_id=d4901968-dad3-4845-a9b0-a57d027f11ab"
    )
      .then((response) => response.json())
      .then((data) =>
        data.result.records.map((item: any) => setCities(item.שם_ישוב))
      );
  }, []);
  return (
    <div>
      <Navbar />
      <FlexBox
        element={
          <Card
            heading="Registered?"
            inputs={[
              <Input text="First Name" />,
              <Input text="Last Name" />,
              <Input text="Email" />,
              <Input text="Password" />,
              <Input text="Validate Password" />,
              <Select cities={cities} />,
              // <Select />,
            ]}
            button={"Log In"}
            link={<Link to={"/"}>registered</Link>}
          />
        }
      />
    </div>
  );
};

export default Register;
