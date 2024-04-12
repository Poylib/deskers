'use client';
import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();
  return (
    <article style={{ marginTop: '120px', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <section style={{ width: '50%' }}>
        <h1 style={{ fontSize: 40, fontWeight: 'bold' }}>책상 위 평범한 삶, 그 이상의 가치를 함께 추구합니다. 데스커스 🌼 </h1>

        <p style={{ marginTop: 4 }}>매일 도전과 성장하는 직장인들을 위한 워크&라이프 스타일 블로그입니다. </p>

        <h2 style={{ marginTop: 24, fontSize: 24 }}> 당신의 책상 위에서 매일 도전하고 성장이 일어나고 있나요? </h2>

        <p style={{ marginTop: 4 }}>업무를 잘하고 싶은 욕심을 내심 마음 속에 간직 했지만,</p>

        <p>막상 방법을 잘 모르거나 일에 치여서 그럴 여유 조차 사치라고 부정하며 애써 외면해왔나요?</p>
        <p>그런 마음을 가진 것은 결코 당신의 잘못이 아닙니다.</p>

        <h2 style={{ marginTop: 24, fontSize: 24 }}>이제 편집자가 추천하는 분야 별 전문 데스커와 소통할 시간입니다. </h2>
        <p style={{ marginTop: 4 }}>더이상 혼자 고민하지말고, 관심 분야 전문가와 함께 도전과 성장의 여정을 떠나보세요.</p>
        <p style={{ marginTop: 4, marginBottom: 24 }}>보다 나은 당신의 내일 응원하는 엄선된 고품질 콘텐츠를 데스커스가 지원합니다.</p>

        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <a onClick={() => router.push('/')} style={{ fontSize: 20, color: 'blue' }}>
            > 지금 당장 전문 직장 일잘러 꿀팁 구경하러 가기
          </a>
        </div>
      </section>
    </article>
  );
}
