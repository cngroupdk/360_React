import styled from 'styled-components';

export const IconWrapper = styled.div`    
    .fa {
        margin: 3px 3px 0 6px ;   
    }

    .fa-user-o {
        color: #073453;
        font-size: ${props => props.size}em;
    }
    
    .fa-clock-o {
        color: red;
        font-size: ${props => props.size + 0.3}em;
    }
`;
