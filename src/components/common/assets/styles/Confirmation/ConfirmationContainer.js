import styled from 'styled-components';

export const ConfirmationContainer = styled.div`
  background: rgba(0,0,0,0.5);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 12;

  .confirmation {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: #000000 0 3px 9px;
    left: 50%;
    max-width: 320px;
    opacity: 1;
    padding: 25px;
    position: absolute;
    top: 50%;
    transform-origin: top left;
    transform: translateY(-50%) translateX(-50%) scale(1);
    width: 100%;
  }

  h2 {
    color: #ed1848;
    margin: 0 0 10px;
  }

  h4 {
    color: #4f4f4f;
    font-size: 18px;
    margin: 0 0 20px;
  }

  .button-wrapper {
    display: flex;
    justify-content: flex-end;

    button:first-child {
      margin-right: 10px;
    }
  }

  .akcept-button {
    text-align: center;
    color: #ffffff;
    background: #ed1848;
    padding: 5px 10px;
    font-weight: 700;
    outline: none;
    border: none;
    white-space: nowrap;
    border-bottom: 2px solid #808080;
  }

  .cancel-button {
    text-align: center;
    color: #ffffff;
    background: #a1a1a1;
    padding: 5px 10px;
    font-weight: 700;
    outline: none;
    border: none;
    white-space: nowrap;
    border-bottom: 2px solid #808080;
  }
`;
