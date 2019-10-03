import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  z-index: 20;
  position: fixed;
  top: 50%;
  left: 50%;
  overflow: scroll;
  max-height: 90vh;
  transform: translate(-50%, -50%);
  background: #191919;
  border-radius: 10px;
  padding: 5rem;
  visibility: ${props => (props.open ? "visible" : "hidden")};
  @media only screen and (max-width: 41em) {
    width: 90%;
    padding: 1.5rem;
    padding-top: 10rem;
  }
`

const CloseBtn = styled.span`
  display: block;
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 2rem;
  right: 3rem;
  cursor: pointer;
  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    width: 3rem;
    height: 1px;
    background-color: #fff;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`

const Header = styled.h4`
  font-size: 3rem;
  font-family: "Playfair Display", serif;
  text-align: center;
`

const Form = styled.form`
  margin: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Lato", sans-serif;
  font-weight: 400;
`

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1.5rem;
  align-items: center;
  @media only screen and (max-width: 41em) {
    grid-template-columns: 1fr;
    margin: 1.5rem 0;
    width: 100%;
  }
`

const Label = styled.label`
  color: #efefef;
  margin-right: 10rem;
  font-size: 1.8rem;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  @media only screen and(max-width: 41em) {
    font-size: 1.6rem;
  }
`

const Input = styled.input`
  margin: 1.5rem 0;
  border: 1px solid #8f8f8f;
  border-radius: 10px;
  color: #efefef;
  background-color: transparent;
  font-size: 1.8rem;
  padding: 1.5rem;
  transition: border 0.3s;
  width: 30rem;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  &:focus {
    outline: none;
    border: 1px solid #0074b8;
  }
  @media only screen and (max-width: 41em) {
    width: 100%;
    font-size: 1.6rem;
  }
`

const TextInput = styled.textarea`
  font-family: "Lato", sans-serif;
  line-height: 1.7;
  height: 15rem;
  width: 100%;
  overflow: scroll;
  margin: 1.5rem 0;
  border: 1px solid #8f8f8f;
  border-radius: 10px;
  color: #efefef;
  background-color: transparent;
  font-size: 1.8rem;
  padding: 1.5rem;
  resize: none;
  &:focus {
    outline: none;
    border: 1px solid #0074b8;
  }
  @media only screen and (max-width: 41em) {
    width: 100%;
    font-size: 1.6rem;
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
  transition: border 0.3s;
  &:hover {
    background-color: #0074b8;
    color: #efefef;
  }
  @media only screen and(max-width: 41em) {
    font-size: 1.6rem;
  }
`

const Modal = ({ open, setOpen, title, textPlaceholder, full }) => {
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
    <Container open={open}>
      <Header>{title}</Header>
      <Form netlify>
        <InputWrapper>
          <Input
            type="text"
            name="name"
            id="name"
            value={details.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            type="email"
            name="email"
            id="email"
            value={details.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            value={details.phone}
            onChange={handleChange}
          />
        </InputWrapper>

        {full ? (
          <>
            <InputWrapper>
              <Input
                type="text"
                name="location"
                id="location"
                placeholder="Company"
                value={details.location}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="location"
                id="location"
                placeholder="Location"
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
      <CloseBtn onClick={() => setOpen(false)}>&nbsp;</CloseBtn>
    </Container>
  )
}

export default Modal
