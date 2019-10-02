import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  z-index: 20;
  position: fixed;
  top: 50%;
  left: 50%;
  max-height: 80vh;
  overflow: scroll;
  transform: translate(-50%, -50%);
  background: #191919;
  border-radius: 10px;
  padding: 5rem;
`

const Header = styled.h4`
  font-size: 3rem;
  font-family: "Playfair Display", serif;
  text-align: center;
`

const Form = styled.form`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`

const Label = styled.label`
  color: #efefef;
  margin-right: 10rem;
  font-size: 1.8rem;
`

const Input = styled.input`
  margin: 1.5rem 0;
  border: 1px solid #8f8f8f;
  border-radius: 10px;
  color: #efefef;
  background-color: transparent;
  font-size: 1.8rem;
  padding: 1.5rem;
  transition: all 0.3s;
  width: 30rem;
  &:focus {
    outline: none;
    border: 1px solid #0074b8;
  }
`

const TextInput = styled.textarea`
  height: 25rem;
  width: 100%;
  overflow: scroll;
  margin: 1.5rem 0;
  border: 1px solid #8f8f8f;
  border-radius: 10px;
  color: #efefef;
  background-color: transparent;
  font-size: 1.8rem;
  padding: 1.5rem;
  transition: all 0.3s;
  resize: none;
  &:focus {
    outline: none;
    border: 1px solid #0074b8;
  }
`

const Submit = styled.button`
  margin-top: 1.5rem;
  background-color: transparent;
  font-size: 1.8rem;
  color: #0074b8;
  text-decoration: none;
  padding: 1rem 3rem;
  border: 1px solid #0074b8;
  border-radius: 30px;
  transition: all 0.3s;
  &:hover {
    background-color: #0074b8;
    color: #efefef;
  }
`

const Modal = ({ title, textPlaceholder, full }) => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    body: "",
  })

  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(details)
  }

  return (
    <Container>
      <Header>{title}</Header>
      <Form>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={details.name}
            onChange={handleChange}
            placeholder="Kawhi Leonard"
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={details.email}
            onChange={handleChange}
            placeholder="KLeonard2@clippers.com"
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder="555-555-5555"
            value={details.phone}
            onChange={handleChange}
          />
        </InputWrapper>

        {full ? (
          <>
            <InputWrapper>
              <Label htmlFor="company">Company</Label>
              <Input
                type="text"
                name="company"
                id="company"
                placeholder="Clippers"
                value={details.company}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="location">Location</Label>
              <Input
                type="text"
                name="location"
                id="location"
                placeholder="Los Angeles"
                value={details.location}
                onChange={handleChange}
              />
            </InputWrapper>
          </>
        ) : null}
        <TextInput
          id="body"
          name="body"
          placeholder={textPlaceholder}
          value={details.body}
          onChange={handleChange}
        />

        <Submit onClick={handleSubmit}>Submit</Submit>
      </Form>
    </Container>
  )
}

export default Modal
