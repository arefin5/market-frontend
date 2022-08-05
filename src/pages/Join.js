import React from 'react'
import { Form ,Button} from 'react-bootstrap'

const Join = () => {
  return (
    <div className="logonForm">
       <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
               
            <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Your  Name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form. Group controlid="formBasicName"> 
                <div className="nby">
     <Form.Check custom type="checkbox"
      id="checkbox9"
       placeholder="Choose a UserName" />
<p>Join as a Buyer</p> </div> 
</Form. Group>
<Button variant="success" size="md" block type="submit">
Submit  </Button>

       </Form>
    </div>
  )
}

export default Join