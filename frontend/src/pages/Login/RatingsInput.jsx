// RatingsInput.jsx
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins';
    background-color: #121212;
  }
`;

const RatingsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px 8%;
`;

const InputContainer = styled.div`
  background-color: #1a1a1a;
  border-radius: 10px;
  padding: 30px;
  width: 400px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #e5e5e5;
  margin-bottom: 20px;
`;

const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Star = styled.span`
  font-size: 36px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "#FFD700" : "#555")};
  transition: color 0.3s ease;

  &:hover {
    color: #FFD700;
  }
`;

const Button = styled.button`
  background-color: #e50914;
  color: #ffffff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d40812;
  }
`;

const RatingsInput = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    alert(`Thank you for your rating: ${rating} stars!`);
  };

  return (
    <>
      <GlobalStyles />
      <RatingsContainer>
        <InputContainer>
          <Title>Rate Your Experience</Title>
          <StarContainer>
            {[1, 2, 3, 4, 5].map((value) => (
              <Star
                key={value}
                isActive={value <= rating}
                onClick={() => handleRating(value)}
              >
                ★
              </Star>
            ))}
          </StarContainer>
          <Button onClick={handleSubmit}>Submit Rating</Button>
        </InputContainer>
      </RatingsContainer>
    </>
  );
};

export default RatingsInput;
