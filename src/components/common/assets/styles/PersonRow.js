import styled from 'styled-components';
import { Row, Column } from 'hedron';

export const TableRow = styled(Row)`
    background-color: white;
    border: 1px solid #bae2e8;
    padding: 0 10px;
    min-height: 60px;
    border-top: none;
    &:hover + StyledButton {
        background-color: #e6f8fc;
    }
`;

export const TableCell = styled(Column)`
    font-size: 16px;
    color: #4f4f4f;
    text-align: left;
    position: relative;
`;
