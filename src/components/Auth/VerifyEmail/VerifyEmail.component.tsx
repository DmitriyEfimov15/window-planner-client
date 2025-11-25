import type { FC } from "react";
import { Button, Flex, Form } from "antd";
import type { VerifyEmailComponentProps, VerifyEmailForm } from "./types";
import styles from "./styles.module.scss";
import FormCard from "../../../UI/FormCard/FormCard";
import OtpInput from "../../../UI/OtpInput/OtpInput";

const VerifyEmailComponent: FC<VerifyEmailComponentProps> = ({
    form,
    isLoading,
    handleVerify,
}) => {
    return (
        <Flex align="center" justify="center" className={styles.container}>
            <FormCard title="Подтверждение почты">
                <Form form={form} className={styles.form}>
                    <Form.Item<VerifyEmailForm> noStyle name="activationCode">
                        <OtpInput />
                    </Form.Item>
                    <Button loading={isLoading} className={styles.button} type="primary" onClick={handleVerify}>
                        Подтвердить
                    </Button>
                </Form>
            </FormCard>
        </Flex>
    );
};

export default VerifyEmailComponent;
