import { Flex, Typography } from "antd";
import styles from "./styles.module.scss";
import { objectElements, workPieceCatalog } from "./utils";
import ItemCard from "./ItemCard/ItemCard";

const PlanDockComponent = () => {
    return (
        <Flex className={styles.container} gap={40} vertical>
            <Flex align="center" vertical>
                <Typography.Title level={3}>Элементы объекта</Typography.Title>
                <div className={styles['card-container']}>
                    {objectElements.map((el) => (
                        <ItemCard text={el.text} color="#4CAF50" />
                    ))}
                </div>
            </Flex>

            <Flex align="center" vertical>
                <Typography.Title level={3}>Католог заготовок</Typography.Title>
                <div className={styles['card-container']}>
                    {workPieceCatalog.map((el) => (
                        <ItemCard text={el.text} color="#F44336" />
                    ))}
                </div>
            </Flex>
        </Flex>
    );
};

export default PlanDockComponent;
