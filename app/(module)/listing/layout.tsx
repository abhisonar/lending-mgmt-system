'use client';

import React, {useState} from 'react';
import {ITabConfig, UiTabs} from '@design-system';

const tabs: ITabConfig[] = [
  {
    key: 'owner',
    label: 'Owner',
    link: './owner',
  },
  {
    key: 'item',
    label: 'Item',
    link: './item',
  },
];

export default function ListingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedListingTab, setSelectedListingTab] = useState<string>(
    tabs[0].key
  );

  return (
    <div className={'p-2'}>
      <div className='grid grid-cols-3'>
        <div></div>
        <div className={'flex justify-center items-center'}>
          <UiTabs
              variant={'link'}
              tabs={tabs}
              selectedKey={selectedListingTab}
              setSelectedKey={setSelectedListingTab}
          ></UiTabs>
        </div>
        <div></div>
      </div>
      <div>{children}</div>
    </div>
  );
}
