import type { FC } from "react";
import type { ItemCardProps } from "./types";
import styles from "./styles.module.scss";

const ItemCard: FC<ItemCardProps> = ({
    text,
    color,
    borderColor = "#eeeeee",
}) => {
    return (
        <div
            className={styles.container}
            style={{
                backgroundColor: color,
                border: `1px solid ${borderColor}`,
            }}
        >
            {text}
        </div>
    );
};

export default ItemCard;
