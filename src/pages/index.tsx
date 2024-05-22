import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2; 
`;

const FormContainer = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc; 
  background-color: #fff; 
`;

const Index = () => {
  useEffect(() => {
  }, []);

  return (
    <Container className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <FormContainer className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome!
        </h1>
        <p className="text-center text-lg text-gray-700">Please select an option:</p>
        <ul className="flex flex-col space-y-2">
          <li>
            <a href="/login" className="block w-full rounded-md bg-indigo-600 text-white text-center py-2 hover:bg-indigo-700 transition duration-300">Login</a>
          </li>
          <li>
            <a href="/register" className="block w-full rounded-md bg-indigo-600 text-white text-center py-2 hover:bg-indigo-700 transition duration-300">Register</a>
          </li>
        </ul>
      </FormContainer>
    </Container>
  );
};

export default Index;
