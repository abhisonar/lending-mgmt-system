'use client';

import React, {useEffect, useState} from 'react';
import {ITabConfig, UiTabs} from '@design-system';
import {usePathname} from 'next/navigation';

const tabs: ITabConfig[] = [
  {
    key: 'owner',
    label: 'Owner',
    link: '/listing/owner',
  },
  {
    key: 'item',
    label: 'Item',
    link: '/listing/item',
  },
];

export default function ListingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [selectedListingTab, setSelectedListingTab] =
    useState<string>(pathName);

  useEffect(() => {
    console.log(selectedListingTab);
  }, [pathName]);

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
