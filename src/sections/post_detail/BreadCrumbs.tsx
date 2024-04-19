'use client';
import React from 'react';
import Link from 'next/link';

type Props = {
  group: string;
  slug: string;
};

interface ParentInfo {
  url: string;
  label: string;
}

const BreadCrumbs = (props: Props) => {
  const data: ParentInfo[] = [
    { url: '/', label: 'home' },
    { url: `/${props.group}`, label: props.group },
  ];

  return (
    <ul className="flex items-center ">
      {data.map((one, index) => (
        <li key={index} className="flex items-center p-0 m-0 ">
          <Link href={one.url} className="m-0 " style={{ textDecoration: 'none' }}>
            <span className="text-gray-400 hover:underline">{one.label}</span>
          </Link>
          {index !== data.length - 1 && <span className="mx-2 mb-0">&gt;</span>}
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
