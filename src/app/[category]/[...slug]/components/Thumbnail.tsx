import Image from 'next/image';

import test from '@@/images/test.jpg';
export default function Thumbnail() {
  return (
    <div>
      <Image src={test} style={{ objectFit: 'cover', height: 240, width: '100%' }} alt={`컨텐츠 썸네일`} />
    </div>
  );
}
