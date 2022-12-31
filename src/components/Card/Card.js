import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useAppContext } from '../../store/AppContext';


export const Card = ({ image, title, total }) => {
    const user = useAppContext ();
    return (
        <CardBS>
            <CardBS.Img src={image} alt="CardBS image" />
            <CardBS.ImgOverlay>
            </CardBS.ImgOverlay>
                <Button variant="primary">
                Comprar <Badge bg="secondary">{total}</Badge>
                </Button>
            <CardBS.Body>
                <CardBS.Title>
                    <span>{title}</span>
                </CardBS.Title>
            </CardBS.Body>
        </CardBS>

    )
}


