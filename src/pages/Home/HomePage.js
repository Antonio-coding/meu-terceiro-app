/*import ReactDOM from 'react-dom';*/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from '../../components/Card/Card';
import { ModalSavePin } from '../../containers/ModalSavePin/ModalSavePin';
import { Notification } from '../../components/Notification/Notification';
import { ModalCreateFolder } from '../../containers/ModalCreateFolder/ModalCreateFolder';



export const HomePage = () => {
    return (
        <div>
            <ModalSavePin open={false} />
            <ModalCreateFolder open={false} />
            <Notification
            message='criado com sucesso'
            onClose={() =>{
                console.log('clicou em fechar')
            }}
            />
            <Container fluid>
                <Row>
                    <Col xs={12} md={3}><Card title="veremos oque sai" image="https://natahouse.com/static/3665d1ab2ac0b77afbadc1d13d182f8f/b8290/Guia-pratico-sobre-React.jpg" total={0} /></Col>
                    <Col xs={12} md={3}><Card title="vamos ver noque vai dar " image="https://www.nicepng.com/png/detail/123-1235180_anime-reaction-images-thinking-anime-png.png" total={1} /></Col>
                </Row>
            </Container>
        </div>
    )
}