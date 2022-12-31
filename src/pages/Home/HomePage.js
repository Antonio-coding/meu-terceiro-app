/*import ReactDOM from 'react-dom';*/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from '../../components/Card/Card';
import { ModalSavePin } from '../../containers/ModalSavePin/ModalSavePin';
import { ModalCreateFolder } from '../../containers/ModalCreateFolder/ModalCreateFolder';
import { Notification } from '../../components/Notification/Notification';
import { useAppContext } from '../../store/AppContext';



export const HomePage = () => {
    const value = useAppContext();
    return (
        <div>
            <ModalSavePin open={false} />
            <ModalCreateFolder open={false} />
            <Notification
                message='Criado com sucesso'
                onClose={() => {
                    console.log('Clicou em fechar')
                }}
            />
            <span>{value.name}</span>
            <Container fluid>
                <Row>
                    <Col xs={12} md={3}><Card title="Camisa cropped manga longa de nylon simples / R$70,32" image="https://c8.alamy.com/comp/RDG63Y/stylish-indian-model-man-in-casual-clothes-and-sunglasses-posed-outdoor-at-street-of-india-RDG63Y.jpg" total={0} /></Col>
                    <Col xs={12} md={3}><Card title="Roupa esportiva de poliéster simples 2 peças / R$83,12" image="https://static.vecteezy.com/ti/fotos-gratis/p1/10430651-afro-americana-menina-com-roupas-coloridas-posando-ao-ar-livre-na-moda-mulher-negra-foto.jpg" total={1} /></Col>
                    <Col xs={12} md={3}><Card title="Roupa esportiva de poliéster bolsa 2 peças / R$101,06 " image="https://static.vecteezy.com/ti/fotos-gratis/p1/10443813-elegante-indiano-barba-modelo-homem-em-roupas-casuais-posou-ao-ar-livre-na-rua-da-india-foto.jpg" total={0} /></Col>
                    <Col xs={12} md={3}><Card title="Roupa de ginástica de nylon textura 2 peças / R$108,72 " image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxC-QeUJ5fdjxCBo23FUMnPIWRJE3HPmEUw1gLSXQzeNCRRIY6q_qRkgPfZc37L-DxTxo&usqp=CAU" total={0} /></Col>
                </Row>
            </Container>
        </div>
    )
}