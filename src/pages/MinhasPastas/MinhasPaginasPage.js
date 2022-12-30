import Container from "react-bootstrap/Container";
import { ListGroup } from "../../components/ListGroup/ListGroup";

export const MinhasPaginasPage = () => {
    return (
        <Container>
            <ListGroup items={[
                {
                    title: 'Matemática',
                    total: '3'
                },
                {
                    title: 'Historia',
                    total: '5'
                }                  
            ]} />
        </Container>
    )
};