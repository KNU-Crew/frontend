'use client';

import ClubFeed from '@/src/features/club/detail/ui/ClubFeed';
import ClubHeader from '@/src/features/club/detail/ui/ClubHeader';
import ClubInfo from '@/src/features/club/detail/ui/ClubInfo';
import ClubNotFound from '@/src/features/club/detail/ui/ClubNotFound';
import type { ActiveTabTypes } from '@/src/features/club/detail/ui/TabMenu';
import TabMenu from '@/src/features/club/detail/ui/TabMenu';
import { useClubDetailInfoQuery } from '@/src/features/club/detail/hooks/useClubDetailInfoQuery';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function ClubDetailPage() {
  const params = useParams();
  const id = params.clubId as string;

  const { data: clubDetail, isLoading, error } = useClubDetailInfoQuery(id);

  const [activeTab, setActiveTab] = useState<ActiveTabTypes>('동아리 소개');

  if (isLoading) return <p className="text-center text-gray-500">동아리 정보를 불러오는 중...</p>;
  
  if (error || !clubDetail) return <ClubNotFound />;

  return (
    <div className='mx-auto max-w-5xl p-6'>
      {/* 동아리 기본 정보 */}
      <ClubHeader club={clubDetail} />

      {/* 탭 메뉴 */}
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 탭 컨텐츠 */}
      {activeTab === '동아리 소개' ? <ClubInfo club={clubDetail} /> : <ClubFeed />}
    </div>
  );
}
