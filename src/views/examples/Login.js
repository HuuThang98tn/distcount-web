import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  NavLink
} from "reactstrap";
import { Route, Link, useHistory } from "react-router-dom";
import routes from "routes.js";

const Login = () => {
  const history = useHistory();

  const onClickLogin = () => {
    history.push("/index")
  }
  const ForgotPassword = () => {
    history.push("/auth/register")
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <h1>Đăng nhập</h1>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button
                  onClick={onClickLogin}
                  className="my-4" color="primary" type="button">
                  Đăng nhập
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col className="text-center" xs="12">
            <a
              className="text-light"
              href="#pablo"
              onClick={ForgotPassword}
            >
              <small>Quên mật khẩu?</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
