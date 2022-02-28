import React from 'react';
import {getByLabelText, render} from '@testing-library/react'
import LoginForm from '../components/auth/login';
import { AuthProvider } from '../store/auth'

const renderComponent = () => {
    return render(
        <AuthProvider>
            <LoginForm setStatus={() => {}} />
        </AuthProvider>
    )
}

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

describe('LoginForm', () => {
    it('should render login form', () => {
        const component = renderComponent();
        const { getByLabelText } = component

        const firstText = getByLabelText('Username')
        const secondText = getByLabelText('Password')

        expect(firstText).toBeDefined();
        expect(secondText).toBeDefined()
    });
});

