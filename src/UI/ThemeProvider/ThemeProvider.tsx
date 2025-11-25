import { ConfigProvider, theme } from "antd";
import type { FC, PropsWithChildren } from "react";
import ruRU from "antd/locale/ru_RU";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      locale={ruRU}
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#007B8A", // бирюзовый (основной)
          colorInfo: "#006E7A", // вариант потемнее
          colorBgBase: "#ffffff",
          colorTextBase: "#000000",
          borderRadius: 12,
          fontFamily: "'Inter', 'Roboto', sans-serif",
          colorLink: "#007B8A",
          colorLinkHover: "#0099A6",
          colorLinkActive: "#005C67",
        },
        components: {
          Button: {
            colorPrimaryHover: "#0099A6",
            colorPrimaryActive: "#005C67",
            controlHeight: 40,
            borderRadius: 12,
            fontWeight: 500,
          },
          Card: {
            borderRadiusLG: 16,
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            padding: 24,
          },
          Input: {
            borderRadius: 10,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
