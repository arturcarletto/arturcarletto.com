import styles from './styles/Clara.module.css';
import Buttons from "@/pages/clara/components/Buttons";
import MapPreview from "@/pages/clara/components/MapPreview";

export default function Clara(){
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Bora andar de standup?</h1>
            <Buttons></Buttons>

            <MapPreview></MapPreview>
        </main>
    );
}
