
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Table,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import ModalMoney from "components/Modal/ModalMoney";

const Index = (props) => {
    const [activeNav, setActiveNav] = useState(1);
    const [chartExample1Data, setChartExample1Data] = useState("data1");
    const [stateSwitches, setStateSwitches] = useState(true);
    const [modal, setModal] = useState(false);
    const [checkedConfirm, setCheckedConfirm] = useState(false);

    if (window.Chart) {
        parseOptions(Chart, chartOptions());
    }

    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveNav(index);
        setChartExample1Data("data" + index);
    };

    const showDialogConfirm = () => {
        setModal(true)
    }
    const closeConfirm = () => {
        setCheckedConfirm(true)
        setModal(false)
    }
    const closeCancel = () => {
        setModal(false)
        setCheckedConfirm(false)
    }

    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <Card className="bg-gradient-default shadow">
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h6 className="text-uppercase text-light ls-1 mb-1">
                                            Tổng quan
                                        </h6>
                                        <h2 className="text-white mb-0">Doanh số</h2>
                                    </div>
                                    <div className="col">
                                        <Nav className="justify-content-end" pills>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames("py-2 px-3", {
                                                        active: activeNav === 1
                                                    })}
                                                    href="#pablo"
                                                    onClick={(e) => toggleNavs(e, 1)}
                                                >
                                                    <span className="d-none d-md-block">Tháng</span>
                                                    <span className="d-md-none">M</span>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames("py-2 px-3", {
                                                        active: activeNav === 2
                                                    })}
                                                    data-toggle="tab"
                                                    href="#pablo"
                                                    onClick={(e) => toggleNavs(e, 2)}
                                                >
                                                    <span className="d-none d-md-block">Tuần</span>
                                                    <span className="d-md-none">W</span>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                {/* Chart */}
                                <div className="chart">
                                    <Line
                                        data={chartExample1[chartExample1Data]}
                                        options={chartExample1.options}
                                        getDatasetAtEvent={(e) => console.log(e)}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="4">
                        <Card className="shadow">
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h6 className="text-uppercase text-muted ls-1 mb-1">
                                            Hiệu xuất
                                        </h6>
                                        <h2 className="mb-0">Tổng số tiền thu được</h2>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                {/* Chart */}
                                <div className="chart">
                                    <Bar
                                        data={chartExample2.data}
                                        options={chartExample2.options}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Trang thái người dùng</h3>
                                    </div>
                                    <div className="col text-right">
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm"
                                        >
                                            Xem tất cả
                                        </Button>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Tên người dùng</th>
                                        <th scope="col">Số điện thoại</th>
                                        <th scope="col">Số tài khoản </th>
                                        <th scope="col">Số tiền yêu cầu rút</th>
                                        <th scope="col">Số tiền yêu cầu nạp</th>
                                        <th scope="col">Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Trần Hữu Thắng</th>
                                        <td>0987654321</td>
                                        <td>300.000đ</td>
                                        <td>
                                            <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                                        </td>
                                        <td>
                                            <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                                            46,53%
                                        </td>
                                        <td>
                                            <label >
                                                <input
                                                    checked={checkedConfirm}
                                                    onClick={showDialogConfirm}
                                                    type="checkbox" />
                                                <span class="fas slider round text-red mr-3 ml-2">Thực hiện lệnh chuyển tiền</span>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <ModalMoney
                modal={modal}
                closeConfirm={closeConfirm}
                closeCancel={closeCancel}
            />
        </>
    );
};

export default Index;
