import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import List from '../components/posts/List';

const Home = () => {
    return (
        <Container fluid>
            <Row className='m-5'>
            <List />
            </Row>
        </Container>
    )
}

export default Home