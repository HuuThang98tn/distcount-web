/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, Container, Row, CardTitle, Label, FormGroup, Input, Form, Button, Col } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";



const Setting = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">

            <Card className="shadow border-0">
              <div className="heading-small text-muted mb-4 col">
                <Row>
                  <Col lg="6">
                    <CardTitle tag="h1" >
                      Cài đặt tỷ giá tiền
                    </CardTitle>
                    <Form>
                      <FormGroup floating>
                        <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="Nhập tỉ giá vào đây.."
                          type="text"
                        />
                      </FormGroup>
                      <Button>
                        Xác nhận
                      </Button>
                    </Form>
                  </Col>

                </Row>

              </div>
              <div className="heading-small text-muted mb-4 col">
                <Row>
                  <Col lg="6">
                    <CardTitle tag="h1" >
                      Cài đặt tỷ giá tiền
                    </CardTitle>
                    <Form>
                      <FormGroup floating>
                        <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="Nhập tỉ giá vào đây.."
                          type="text"
                        />
                      </FormGroup>
                      <Button>
                        Xác nhận
                      </Button>
                    </Form>
                  </Col>

                </Row>

              </div>
              <div className="heading-small text-muted mb-4 col">
                <Row>
                  <Col lg="6">
                    <CardTitle tag="h1" >
                      Cài đặt tỷ giá tiền
                    </CardTitle>
                    <Form>
                      <FormGroup floating>
                        <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="Nhập tỉ giá vào đây.."
                          type="text"
                        />
                      </FormGroup>
                      <Button>
                        Xác nhận
                      </Button>
                    </Form>
                  </Col>

                </Row>

              </div>

            </Card>

          </div>

        </Row>
      </Container>
    </>
  );
};

export default Setting;
