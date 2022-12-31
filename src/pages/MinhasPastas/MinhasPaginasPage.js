import Container from "react-bootstrap/Container";
import { ListGroup } from "../../components/ListGroup/ListGroup";

export const MinhasPaginasPage = () => {
    return (
        <Container>
            <ListGroup items={[
                {
                    title: 'Salvo',
                    total: '3'
                },
                {
                    title: 'Salvo',
                    total: '5'
                }                  
            ]} />
        </Container>
    )
};