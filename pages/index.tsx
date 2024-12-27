import React from 'react';
import styles from '../styles/Home.module.css'
import MaintenanceWarning from '../components/MaintenanceWarning';

const Home = () => {
        const isMaintenanceMode = true;

        return (
            <main className="flex flex-col items-center justify-center min-h-screen">
                {isMaintenanceMode ? (
                    <MaintenanceWarning
                        isVisible={isMaintenanceMode}
                        message="🚧 EM MANUTENÇÃO! 🚧"
                    />
                ) : (
                    < div className={styles.container}>

                    </div>
                )}
            </main>
        )
            ;
    }
;

export default Home;
