import React from 'react';

interface MaintenanceWarningProps {
    isVisible: boolean;
    message?: string;
}

const MaintenanceWarning: React.FC<MaintenanceWarningProps> = ({ isVisible, message }) => {
    if (!isVisible) return null;

    return (
        <div className="bg-yellow-200 text-yellow-800 text-lg font-semibold p-4 rounded shadow-lg inline-block mx-auto mt-6">
            {message || '🚧 This website is currently under construction. Check back soon! 🚧'}
        </div>
    );
};

export default MaintenanceWarning;
