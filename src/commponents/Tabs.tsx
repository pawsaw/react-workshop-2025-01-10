import { CSSProperties, useState } from "react";

export interface TabProps {
  label: string;
  children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = () => {
  return null;
};

export interface TabsProps {
  children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
}

export const Tabs: React.FC<TabsProps> = ({ children: _tabs }) => {
  const tabs = Array.isArray(_tabs) ? _tabs : [_tabs];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        {tabs.map((tab, i) => (
          <div style={styles.tab} key={i} onClick={() => setActiveIndex(i)}>
            {tab.props.label}
          </div>
        ))}
      </div>
      <div style={styles.content}>
        {tabs.map((tab, i) => (
          <div
            key={i}
            style={
              activeIndex === i
                ? styles.contentTabActive
                : styles.contentTabInactive
            }
          >
            {tab.props.children}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    width: "400px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    gap: "10px",
  },
  tab: {
    padding: "0.3em 0.5em",
  },
  content: {
    flex: 1,
  },
  contentTabActive: {
    display: "block",
  },
  contentTabInactive: {
    display: "none",
  },
};
