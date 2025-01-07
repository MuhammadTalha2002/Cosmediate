import React from 'react';
import { Container, Navbar, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm p-3 py-0">
            <Container fluid>
                <Row className="w-100 align-items-center">
                    {/* Brand Name */}
                    <Col xs={12} md={4} className="text-center text-md-start mb-3 mb-md-0">
                        <Typography variant="h4" sx={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
                            Cosmediate
                        </Typography>
                    </Col>

                    {/* Search Bar */}
                    <Col xs={12} md={4} className="mb-3 mb-md-0 d-flex justify-content-center">
                        <Form className="d-flex w-100" style={{ maxWidth: "500px" }}>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2 w-100"
                                aria-label="Search"
                            />
                            {/* <Button variant="outline-primary">Search</Button> */}
                        </Form>
                    </Col>

                    {/* Notification and User Profile Section */}
                    <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end gap-3">
                        {/* Notification Icon with Badge */}
                        <button className="btn position-relative">
                            <span className="fs-4">🔔</span>
                            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                <span className="visually-hidden">New alerts</span>
                            </span>
                        </button>

                        {/* User Profile */}
                        <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                                🧑
                            </div>
                            <div className="ms-2">
                                <p className="mb-0 fw-semibold">Tim Bouwman</p>
                                <p className="text-muted small">Abstec Amsterdam</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Header;
