import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
    Col,
    Row,
    CardTitle
} from "reactstrap";


const ModalMoney = ({ modal, closeConfirm, closeCancel }) => {
    return (
        <>
            <Modal isOpen={modal} >
                <ModalHeader >
                    <h1>Nhập số tiền trả cho khách</h1>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <CardTitle tag="h3">
                            Email người rút tiền
                        </CardTitle>
                        <CardTitle >
                            Tranhuuthang98fpttn@gmail.com
                        </CardTitle>
                        <CardTitle tag="h3">
                            Số điện thoại người rút
                        </CardTitle>
                        <CardTitle

                        >0987654321</CardTitle>
                        <CardTitle tag="h3">
                            Ngân hàng
                        </CardTitle>
                        <Row>
                            <Col md={4}>
                                <CardTitle >
                                    Viettinbank
                                </CardTitle>
                            </Col>
                            <Col md={6}>
                                <CardTitle >
                                    Số tài khoản : Viettinbank
                                </CardTitle>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleCity">
                                        Số tiền cần rút
                                    </Label>
                                    <Input
                                        id="exampleCity"
                                        name="city"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={closeConfirm}>
                        Xác nhận
                    </Button>{' '}
                    <Button color="secondary" onClick={closeCancel}>
                        Huỷ bỏ
                    </Button>
                </ModalFooter>
            </Modal>
        </>

    )
}

export default ModalMoney
