import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';

export const ModalSavePin = ({ open }) => {
    return (
        <Modal
            title='Salvar Pin'
            open={open}
            controls={[
                {
                    label: 'Criar pasta',
                    variant: 'secondary',
                    loading: false,
                    loadingLabel: 'Criando',
                    onClick: () => {
                        console.log('Clicou em criar pasta')
                    }
                }
            ]}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col xs={8} >1 of 1</Col>
                        <Col xs={4}><Button className='text-end' label='Salvar' loadingLabel='Salvando' /></Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={8} >1 of 1</Col>
                        <Col xs={4}><Button className='text-end' label='Salvar' loadingLabel='Salvando' /></Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={8} >1 of 1</Col>
                        <Col xs={4}><Button className='text-end' label='Salvar' loadingLabel='Salvando' /></Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </Modal>
    )

}