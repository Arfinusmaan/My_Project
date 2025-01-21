import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../products';
import { Col, Row, ListGroup, Image, Card } from 'react-bootstrap';
import Rating from '../Components/Rating'; // Import the Rating component

function ProductScreen() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <>
      <Link to='/' className='btn btn-dark my-3'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Price: ₹{product.price.toLocaleString('en-IN')}</h3> {/* Add rupee symbol */}
            </ListGroup.Item>
            <ListGroup.Item>
              <p><strong>Description:</strong> {product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <Card>
            <ListGroup variant='fluid'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <strong>₹{product.price.toLocaleString('en-IN')}</strong> {/* Add rupee symbol */}
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status :</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup>
                <button className='btn btn-dark' type='button' disabled={product.countInStock === 0}>
                  Add to Cart
                </button>
              </ListGroup>

            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductScreen;