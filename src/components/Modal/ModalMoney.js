import { useState } from "react";
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
    CardTitle,
    ButtonGroup,

} from "reactstrap";


const ModalMoney = ({ modal, closeConfirm, closeCancel }) => {
    const [cSelected, setCSelected] = useState([]);
    const [rSelected, setRSelected] = useState(null);

    const setGender = (event) => {
        console.log(event.target.value);
    }
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
                            <Col md={5}>
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
                            <Col md={6}>
                                <CardTitle >
                                    Loại tiền tệ
                                </CardTitle>
                                <div
                                    className="row"
                                    onChange={setGender.bind(this)}>
                                    <input className="ml-3" type="radio" value="MALE" name="gender" />
                                    <span className="ml-2">Việt Nam</span>

                                    <input className="ml-3" type="radio" value="FEMALE" name="gender" />
                                    <span className="ml-2">Trung Quốc</span>


                                </div>
                            </Col>
                        </Row>
                        <CardTitle tag="h3">
                            Quy đổi tiền tệ
                        </CardTitle>
                        <CardTitle

                        >1 Nhân dân tệ {'<=>'} 3.468,46VND</CardTitle>
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
