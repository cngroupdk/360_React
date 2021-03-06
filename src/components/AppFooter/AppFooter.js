import React from 'react';

import getYear from '../../lib/getYear';

const AppFooter = () => {
  return (
    <div className="footer-container">
      &copy; {getYear()} <span className="footer-copyright-brand">CN Group CZ</span> s.r.o., All rights reserved.
    </div>
  );
};

export default AppFooter;
