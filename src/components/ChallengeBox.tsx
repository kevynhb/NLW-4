import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const contextData = useContext(ChallengesContext);

    console.log(contextData);

    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo Desafio</strong>
                        <p>Levante e caminhe por 40 minutos</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengFailedButton}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengsucceededButton}
                        >
                            Completei
                        </button>
                    </footer>

                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level up" />
                    Avance de level completando desafios
                </p>
                    </div>
                )
            }
        </div >
    )
}