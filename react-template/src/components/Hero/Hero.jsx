import React from 'react' 
import {Banner, Title, Image, Section} from './HeroStyles' 

function index() {
  return (
    <Section>
    <Banner>
    <Title>Welcome To My Playground!</Title>
    <Image src="./assets/reactgirl.svg" alt="teamwork" /> 
  </Banner>
  </Section>
  )
}

export default index