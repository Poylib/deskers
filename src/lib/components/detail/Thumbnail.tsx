import Image from 'next/image';

export default function Thumbnail({ img }: { img: string }) {
  if (!img) return;
  return (
    <div style={{ width: '100%', height: 300, position: 'relative' }}>
      <Image src={img} style={{ objectFit: 'contain' }} layout="fill" alt={`컨텐츠 썸네일`} />
    </div>
  );
}
