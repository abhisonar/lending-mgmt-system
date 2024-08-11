'use client';

import React from 'react';
import {User} from '@nextui-org/react';

export function LayoutComponent() {
  return (
    <div className='flex justify-between items-center w-full h-[60px] px-3 border-b-1 border-b-gray-500'>
      <p className={'text-xl font-bold'}>Lending Mgmt System</p>
      <User
        name='Chinmay'
        description='Business Owner'
        avatarProps={{
          src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        }}
      />
    </div>
  );
}
