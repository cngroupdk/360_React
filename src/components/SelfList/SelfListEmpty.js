import React from 'react';

import { PersonRow, PersonColumn } from '../common/assets/styles/PersonRow';

export const SelfListEmpty = () => (
    <PersonRow>
        <PersonColumn fluid sm={12}>You don't have any assessments right now</PersonColumn>
    </PersonRow>
);