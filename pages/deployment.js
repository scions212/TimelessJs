import Layout from '../components/Layout';
import React from 'react';
import {Card, CardText, CardBody, CardLink,
CardTitle, CardSubtitle
} from 'reactstrap';


const Deployment = () => {
	return (
		<Layout>
	 <div className="container">
        <div className="row justify-content-around">
      <Card className="col-6 col-md-4">
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
        <CardText>  Some quick example text to build on the
                     card title and make up the bulk of the card's content.
        </CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>


      <Card className="col-6 col-md-4">
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
        <CardText>  Some quick example text to build on the
                     card title and make up the bulk of the card's content.
        </CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    
      <Card className="col-6 col-md-4">
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
        <CardText>  Some quick example text to build on the
                     card title and make up the bulk of the card's content.
        </CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>

            </div>
        </div> 
		</Layout>
	)
}

export default Deployment