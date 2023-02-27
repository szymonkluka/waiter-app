import { Col, Card, Row, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { dateToStr } from '../../../utlis/dateTostr';
import { getPostsByCategory } from '../../../redux/postsRedux';

const SingleCategory = () => {
    const { categoryId } = useParams();

    const posts = useSelector(state => getPostsByCategory(state, categoryId));

    if (posts.length === 0)
        return (
            <Row>
                <Card.Title className="mb-4"><strong><h1>Category: {categoryId}</h1></strong></Card.Title>
                <Card.Text>There are no posts in this category...</Card.Text>
            </Row>
        );

    else

        return (
            <Row>
                <h1>{categoryId}</h1>
                {posts.map(post => (
                    <Col key={post.id}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Title>{post.title2}</Card.Title>
                                <Card.Text className="my-0"><strong>Author: </strong>{post.author}</Card.Text>
                                <Card.Text className="my-0"><strong>Published: </strong>{dateToStr(post.publishedDate)}</Card.Text>
                                <Card.Text><strong>Category: </strong>{post.category}</Card.Text>
                                <Card.Text className="mb-3">{post.descritpion}</Card.Text>
                                <Link to={"/post/" + post.id}>
                                    <Button variant="primary">Read more</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
}

export default SingleCategory;