import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // 유저 정보 불러오기
  const { searchParams } = new URL(request.url);
  console.log('🚀 ~ GET ~ searchParams:', searchParams);

  return NextResponse.json(request.url);
}
