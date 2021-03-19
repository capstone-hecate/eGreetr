import React, {useState} from 'react'
import {createNewCard} from '../store/card'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Upload from './Upload'

const Card = ({createNewCard}) => {
  const [name, setName] = useState('')
  const [yourEmail, setYourEmail] = useState('')
  const [recipientName, setRecipientName] = useState('')
  const [recipientEmail, setRecipientEmail] = useState('')
  const [file, setFile] = useState(null)
  const [text, setText] = useState('')
  // constructor() {
  //   super()
  //   this.state = {
  //     name: '',
  //     yourEmail: '',
  //     recipientName: '',
  //     recipientEmail: '',
  //     file: null,
  //     text: ''
  //   }
  //   this.handleChange = this.handleChange.bind(this)
  //   // this.handleSubmit = this.handleSubmit.bind(this)
  // }
  // handleChange(evt) {
  //   this.setState({[evt.target.name]: evt.target.value})
  // }
  // handleSubmit(evt) {
  //   evt.preventDefault()
  //   this.props.newCard({...this.state})
  // }
  // render() {
  //   const {
  //     name,
  //     yourEmail,
  //     recipientName,
  //     recipientEmail,
  //     file,
  //     text
  //   } = this.state
  return (
    <Container>
      <Form
        onSubmit={async evt => {
          evt.preventDefault()
          const fd = new FormData()
          fd.append('name', name)
          fd.append('yourEmail', yourEmail)
          fd.append('recipientName', recipientName)
          fd.append('recipientEmail', recipientEmail)
          fd.append('file', file)
          fd.append('text', text)
          createNewCard(fd)
        }}
      >
        <h1>Make your card!</h1>
        <Form.Group id="card-form">
          <Form.Label htmlFor="name">Your name</Form.Label>
          <Form.Control
            placeholder="Enter your name"
            name="name"
            onChange={e => setName(e.target.value)}
            type="text"
          />
          <Form.Label htmlFor="yourEmail">Your Email</Form.Label>
          <Form.Control
            placeholder="Enter your email"
            name="yourEmail"
            onChange={e => setYourEmail(e.target.value)}
            type="text"
          />

          <Form.Label htmlFor="recepientName">Recipient Name</Form.Label>
          <Form.Control
            placeholder="Enter recipient name"
            name="recipientName"
            onChange={e => setRecipientName(e.target.value)}
            type="text"
          />

          <Form.Label htmlFor="recepientEmail">Recipient Email</Form.Label>
          <Form.Control
            placeholder="Enter recipient email"
            name="recipientEmail"
            onChange={e => setRecipientEmail(e.target.value)}
            type="text"
          />

          <Form.Label>Upload your photo</Form.Label>
          <Form.Control
            type="file"
            onChange={e => setFile(e.target.files[0])}
          />

          <Form.Label htmlFor="textBox">Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="text"
            onChange={e => setText(e.target.value)}
            type="text"
          />
          <Button variant="dark" type="submit">
            Make my card!
          </Button>
        </Form.Group>
      </Form>
    </Container>
  )
}

const mapDispatch = dispatch => ({
  createNewCard: card => dispatch(createNewCard(card))
})
export default connect(null, mapDispatch)(Card)
