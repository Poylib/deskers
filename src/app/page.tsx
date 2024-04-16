import Container from '@/core/layout/Container';
import Featured from '@/lib/components/main/Featured';
import Tags from '@/lib/components/main/Tags';

export default function Home() {
  return (
    <Container>
      <div>
        <h2>Deskers.</h2>
        <p>책상 위 평범한 삶, 그 이상의 가치를 함께 추구합니다.</p>
      </div>
      <div>
        <Featured />
        <Tags />
      </div>
    </Container>
  );
}
