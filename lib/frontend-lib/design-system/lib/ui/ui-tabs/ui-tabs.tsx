import React from 'react';
import {Tab, Tabs} from '@nextui-org/react';
import Link from 'next/link';

export interface ITabConfig {
  key: string;
  label: string;
  link?: string;
  template?: React.ReactNode;
}

export interface IUiTabsProps {
  tabs?: ITabConfig[];
  variant?: 'default' | 'link';
  selectedKey?: string;
  setSelectedKey?: React.Dispatch<React.SetStateAction<string>>;
}

export const UiTabs: React.FC<IUiTabsProps> = ({
  selectedKey,
  setSelectedKey,
  tabs,
  variant = 'default',
}) => {
  const handleSelectionChange = (key: string) => {
    if (!setSelectedKey) {
      return;
    }
    setSelectedKey(key);
  };

  const linkTemplate = (tabConfig: ITabConfig) => {
    return (
      <Tab
        key={tabConfig.key}
        title={<Link href={tabConfig.link}>{tabConfig.label}</Link>}
      ></Tab>
    );
  };

  const defaultTemplate = (tabConfig: ITabConfig) => {
    return (
      <Tab
        key={tabConfig.key}
        title={<Link href={tabConfig.link}>{tabConfig.label}</Link>}
      ></Tab>
    );
  };

  const baseTabsTemplate = (
    templateFn: (tabConfig: ITabConfig) => React.ReactElement
  ) => {
    return (
      <Tabs
        selectedKey={selectedKey}
        onSelectionChange={(key) => handleSelectionChange(key as string)}
      >
        {tabs.map((tab) => templateFn(tab))}
      </Tabs>
    );
  };

  const renderTabs = () => {
    switch (variant) {
      case 'link':
        return baseTabsTemplate(linkTemplate);
      default:
        return baseTabsTemplate(defaultTemplate);
    }
  };

  return renderTabs();
};
