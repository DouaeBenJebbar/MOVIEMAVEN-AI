import React, { useEffect } from "react";
import styled from "styled-components";

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${({ type }) => (type === "error" ? "#ff4d4d" : "#4caf50")};
  color: #fff;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: translateY(${({ show }) => (show ? "0" : "-20px")});
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  z-index: 1000;
`;

const Toast = ({ message, type, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        onClose();
      }, 3000); // Auto-hide after 3 seconds
      return () => clearTimeout(timeout);
    }
  }, [show, onClose]);

  return (
    <ToastContainer type={type} show={show}>
      {message}
    </ToastContainer>
  );
};

export default Toast;
