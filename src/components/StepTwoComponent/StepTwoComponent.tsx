import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import stepTwoClass from "./StepTwoComponent.module.scss";
import { Container } from "react-bootstrap";

function StepTwoComponent(props: any) {
  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required(),
    emailAddress: yup.string().email().required(),
    phoneNumber: yup.number().required(),
  });

  return (
    <>
      <div className={stepTwoClass.containerTitleSkinStepTwo}>
        <h2>Select Your Plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          name: "",
          emailAddress: "",
          phoneNumber: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className={stepTwoClass.rowSkinStepTwo}>
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
            <Row className={stepTwoClass.rowSkinStepTwo}>
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
            <Row className={stepTwoClass.rowSkinStepTwo}>
              <Form.Group
                as={Col}
                md="12"
                controlId="validationFormikUsername2"
              >
                <Form.Label>Phone Number</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
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
            <Row>
              <Col className={stepTwoClass.containerBackButtonStepTwo}>
                <Button
                  className={`${stepTwoClass.backButtonStepTwo} `}
                  type="button"
                  onClick={(e) => {
                    props.subscribeHandeler(1);
                  }}
                >
                  Go Back
                </Button>
              </Col>
              <Col className={stepTwoClass.containerSubmitButtonStepTwo}>
                <Button
                  className={stepTwoClass.submitButtonStepTwoStyle}
                  type="submit"
                >
                  Next Step
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default StepTwoComponent;
