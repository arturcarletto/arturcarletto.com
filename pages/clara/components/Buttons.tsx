import React, { useState } from 'react';

export default function Buttons() {
    const [swapped, setSwapped] = useState(false);

    const handleSwap = () => {
        setSwapped((prev) => !prev);
    };
    return (
        <div
            style={{
                width: '100%',
                height: '20vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px'
            }}
        >
            {swapped ? (
                <>
                    {/* Swap Button First */}
                    <button
                        style={{
                            padding: '12px 24px',
                            cursor: 'pointer',
                            backgroundColor: '#f44336',
                            color: '#ffffff',
                            borderRadius: '4px'
                        }}
                        onClick={handleSwap}
                    >
                        DEPOIS
                    </button>

                    {/* WhatsApp Button Second */}
                    <a
                        href="https://wa.me/47992002457"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: '12px 24px',
                            backgroundColor: '#25D366',
                            color: '#ffffff',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}
                    >
                        AGORA
                    </a>
                </>
            ) : (
                <>
                    {/* WhatsApp Button First */}
                    <a
                        href="https://wa.me/47992002457"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: '12px 24px',
                            backgroundColor: '#25D366',
                            color: '#ffffff',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}
                    >
                        AGORA
                    </a>

                    {/* Swap Button Second */}
                    <button
                        style={{
                            padding: '12px 24px',
                            cursor: 'pointer',
                            backgroundColor: '#f44336',
                            color: '#ffffff',
                            borderRadius: '4px'
                        }}
                        onClick={handleSwap}
                    >
                        DEPOIS
                    </button>
                </>
            )}
        </div>
    );
}



