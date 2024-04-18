import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import stepOneClass from "./StepOneComponent.module.scss";
import { Container } from "react-bootstrap";

function StepOneComponent(props: any) {
  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required(),
    emailAddress: yup.string().email().required(),
    phoneNumber: yup.number().required(),
  });

  return (
    <>
      {props.step.step == "one" && (
        <>
          <div className={stepOneClass.containerTitleSkin}>
            <h2>Personal Info</h2>
            <p>Please provide your name, email address, and phone number.</p>
          </div>
          <Formik
            validationSchema={schema}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              props.subscribeHandeler(2);
            }}
            initialValues={{
              name: "",
              emailAddress: "",
              phoneNumber: "",
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className={stepOneClass.rowSkin}>
                  {" "}
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="e.g. Stephen Kin"
                      value={values.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                      isValid={touched.name && !errors.name}
                    />
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className={stepOneClass.rowSkin}>
                  {" "}
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="emailAddress"
                      placeholder="e.g. stephenking@lorem.com"
                      value={values.emailAddress}
                      onChange={handleChange}
                      isInvalid={!!errors.emailAddress}
                      isValid={touched.emailAddress && !errors.emailAddress}
                    />

                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.emailAddress}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className={stepOneClass.rowSkin}>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormikUsername2"
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="e.g. +1 234 567 890"
                        aria-describedby="inputGroupPrepend"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        isInvalid={!!errors.phoneNumber}
                        isValid={touched.phoneNumber && !errors.phoneNumber}
                      />
                      <Form.Control.Feedback tooltip>
                        Looks good!
                      </Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.phoneNumber}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className={stepOneClass.rowSubmitButton}>
                  <Button
                    className={stepOneClass.containerSubmitButton}
                    type="submit"
                  >
                    Next Step
                  </Button>
                </Row>
              </Form>
            )}
          </Formik>
        </>
      )}
    </>
  );
}

export default StepOneComponent;
