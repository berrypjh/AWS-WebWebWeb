import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  :root {
    --primary: #fff;
  }
  
  .btn {
    padding: 8px 20px;
    border-radius: 4px;
    outline: none;
    border: none;
    cursor: pointer;
    white-space: nowrap;
  }
  
  .btn--primary {
    background-color: var(--primary);
    color: #242424;
    border: 1px solid var(--primary);
  }
  
  .btn--outline {
    background-color: transparent;
    color: #fff;
    padding: 8px 20px;
    border: 1px solid var(--primary);
    transition: all 0.3s ease-out;
  }

  btn--resize {
    padding: 40px 40px;

  }
  
  .btn--medium {
    padding: 8px 20px;
    font-size: 18px;
  }
  
  .btn--large {
    padding: 35px 28px;
    font-size: 23px;
  }
  
  .btn--mobile {
    text-align: center;
    border-radius: 4px;
    width: 80%;
    text-decoration: none;
    font-size: 1.5rem;
    background-color: transparent;
    color: #fff;
    padding: 14px 20px;
    border: 1px solid #fff;
    transition: all 0.3s ease-out;
  }
  
  .btn--wide {
    padding: 12px 64px;
    font-size: 20px;
  }
  
  .btn--large:hover,
  .btn--medium:hover,
  .btn--mobile:hover {
    transition: all 0.3s ease-out;
    transform: scale(1.1);
    background: #fff;
    color: #242424;
  }
  
  .btn--wide:hover {
    color: #fff;
    background-color: #f00946;
    transition: all 0.2s ease-out;
  }
  
  .btn-link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
  }
  
  .blue {
    background-color: #276afb;
    color: #fff;
    border: none;
  }
  
  .red {
    background-color: #f00946;
    color: #fff;
    border: none;
  }
  
  .primary {
    background-color: #000;
    color: #fff;
    border: none;
    
  }
  
  .primary:hover {
    background-color: #fff;
    color: #000;
    border: none;
    fontWeight: 600;
  }
  
  .green {
    background: #25ce4a;
    color: #fff;
    border: none;
  }
  
  .green:hover {
    background-color: #242424;
  }
`;
