import React from 'react';
import { Button, Section, TextInput } from '../../components';

const Home = () => (
  <>
    <Section>
      <h1 className="title">Welcome to the boilerplate</h1>
    </Section>
    <Section>
      <form>
        <TextInput name="name" placeholder="Name" />
        <Button handleClick={() => null}>Say hi!</Button>
      </form>
    </Section>
  </>
);

export default Home;
