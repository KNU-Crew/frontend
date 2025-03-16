import { ClubDetailInfo } from '@/src/shared';
import Image from 'next/image';

type ClubInfoProps = {
  club: ClubDetailInfo;
};

export default function ClubInfo({ club }: ClubInfoProps) {
  return (
    <div className='mt-6'>
      <h2 className='text-xl font-semibold'>동아리 소개 이미지</h2>
      <Image
        src={club.imageUrl ? club.imageUrl : '/images/knu.webp'}
        alt={`${club.name} 로고`}
        width={200}
        height={200}
        className='mt-4'
      />

      <h3 className='mt-6 text-lg font-semibold'>우리 동아리를 소개할게요!</h3>
      <p className='mt-2 leading-relaxed text-gray-700'>
        {club.description}
      </p>

    </div>
  );
}
