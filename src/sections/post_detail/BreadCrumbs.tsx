'use client';
import React from 'react';
import Link from 'next/link';

type Props = {
  group: string;
  title: string;
};

interface ParentInfo {
  url: string | null;
  label: string;
}

const BreadCrumbs = (props: Props) => {
  const data: ParentInfo[] = [
    { url: '/', label: 'home' },
    { url: `/${props.group}`, label: props.group },
    { url: null, label: props.title }
  ];

  return (
    <ul className="flex items-center ">
      {data.map((one, index) => (
        <li key={index} className="flex items-center p-0 m-0 ">
          {!!one?.url ?
            <Link href={one.url!} className="m-0 " style={{ textDecoration: 'none' }}>
              <span className="text-gray-400 hover:underline">{one.label}</span>
            </Link>
            :
            <span className="text-gray-400">{one.label}</span>
          }
          {index !== data.length - 1 && <span className="mx-2 mb-0">&gt;</span>}
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
