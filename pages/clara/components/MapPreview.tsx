import React from 'react';

export default function MapPreview() {
    const latitude = -26.4526629;
    const longitude = -48.6009206;
    const zoomLevel = 16;

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <iframe
                width="600"
                height="450"
                style={{border: 0}}
                loading="lazy"
                allowFullScreen
                /**
                * 't=k' forces satellite mode.
                * 't=h' would be hybrid mode (satellite + roads).
                * 't=m' is the standard map view.
                * 'z=' sets the zoom level.
                * 'output=embed' makes it embeddable in an iframe.
                */
                src={`https://www.google.com/maps?q=${latitude},${longitude}&t=k&z=${zoomLevel}&output=embed`}
            />
        </div>
    );
};

