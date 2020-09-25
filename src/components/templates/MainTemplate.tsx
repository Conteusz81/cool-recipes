import React from 'react';

const MainTemplate: React.FC = ({ children }) => {
    return (
        <div className="px-16 py-6 bg-gray-100 md:col-span-2">
            { children }
        </div>
    );
};

export default MainTemplate;
