import Image from 'next/image';

export default function Thumbnail({ img }: { img: string }) {
  if (!img) return;
  return (
    <div style={{ width: '100%' }}>
      <Image src={img} style={{ objectFit: 'cover' }} alt={`컨텐츠 썸네일`} width={900} height={300} />
    </div>
  );
}
