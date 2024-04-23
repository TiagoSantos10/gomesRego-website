import { Almarai } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../../../public/fontawesome";
import styles from "./ApproachSection.module.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

const ApproachSection = () => (
    <section id={styles.approachSection}>
        <h1 className={`${almarai.className} ${styles.headingTitle}`}>A nossa abordagem</h1>
        <div className={styles.approachGroup}>
            <div className={styles.groupRow}>
                <div className={styles.item}>
                    <div className={styles.itemCircle}>
                        <FontAwesomeIcon
                            icon={["fas", "magnifying-glass"]} 
                            size="3x"
                            color="var(--gras-background-blue)"
                            className={styles.faIcon}
                        />
                    </div>
                    <div className={styles.itemTitle}>Diagnóstico</div>
                    <div className={styles.itemDescription}>
                        Estudo cuidadoso dos
                        objetivos, pontos de melhoria
                        e contexto económico dos
                        clientes.
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemCircle}>
                        <FontAwesomeIcon
                            icon={["fas", "list-check"]} 
                            size="3x"
                            color="var(--gras-background-blue)"
                            className={styles.faIcon}
                        />
                    </div>
                    <div className={styles.itemTitle}>Planeamento</div>
                    <div className={styles.itemDescription}>
                        Estrutura de uma estratégia
                        racionável que potencie o
                        desempenho dos negócios.
                    </div>
                </div>
            </div>
            <div className={styles.groupRow}>
                <div className={styles.item}>
                    <div className={styles.itemCircle}>
                        <FontAwesomeIcon
                            icon={["far", "lightbulb"]} 
                            size="3x"
                            color="var(--gras-background-blue)"
                            className={styles.faIcon}
                        />
                    </div>
                    <div className={styles.itemTitle}>Análise</div>
                    <div className={styles.itemDescription}>
                        Análise rigorosa dos
                        resultados da estratégia
                        adotada e dos próximos passos.
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemCircle}>
                        <FontAwesomeIcon
                            icon={["fas", "arrow-up-right-from-square"]} 
                            size="3x"
                            color="var(--gras-background-blue)"
                            className={styles.faIcon}
                        />
                    </div>
                    <div className={styles.itemTitle}>Reporte</div>
                    <div className={styles.itemDescription}>
                        Entrega das conclusões
                        aos clientes, orientando-os
                        para o futuro.
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ApproachSection;
