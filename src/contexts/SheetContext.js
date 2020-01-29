import React from 'react';

const sheet = {
    attributes: {
        str: 1,
        dex: 1
    },
    update: () => {}
};

const SheetContext = React.createContext(sheet);

export default SheetContext;