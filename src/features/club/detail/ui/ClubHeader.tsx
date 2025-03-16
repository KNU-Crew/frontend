import { ClubDetailInfo } from '@/src/shared';
import Image from 'next/image';
import Link from 'next/link';

type ClubHeaderProps = {
  club: ClubDetailInfo;
};

export default function ClubHeader({ club }: ClubHeaderProps) {
  return (
    <div className="rounded-lg bg-gray-100 p-6">
      {/* 동아리 기본 정보 */}
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
        {/* 동아리 로고 */}
        <Image
          src={club.imageUrl ? club.imageUrl : '/images/knu.webp'}
          alt={`${club.name} 로고`}
          width={100}
          height={100}
          className="rounded-full object-cover"
        />

        {/* 동아리 명 및 기본 정보 */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">{club.name}</h1>
          <p className="font-semibold text-blue-600">{club.category}</p>
        </div>

        {/* 가입 신청 버튼 */}
        <Link
          href={
            club.isRecruiting && club.recruitmentId
              ? `https://docs.google.com/forms/d/e/${club.recruitmentId}/viewform`
              : '#'
          }
          className={`rounded-lg px-4 py-2 text-sm ${
            club.isRecruiting
              ? 'bg-red-500 text-white hover:bg-red-600 transition-colors'
              : 'cursor-not-allowed bg-gray-300 text-gray-600'
          }`}
          onClick={(e) => {
            if (!club.isRecruiting) e.preventDefault();
          }}
        >
          {club.isRecruiting ? '가입 신청' : '모집 마감'}
        </Link>
      </div>

      {/* 상세 정보 테이블 */}
      <div className="mt-6">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">분과명</td>
              <td className="border border-gray-300 px-4 py-2">{club.category}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">동아리명</td>
              <td className="border border-gray-300 px-4 py-2">{club.name} ({club.subName})</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">설립연도</td>
              <td className="border border-gray-300 px-4 py-2">{club.establishedYear}년</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">회원수</td>
              <td className="border border-gray-300 px-4 py-2">{club.memberCount}명</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">연락처</td>
              <td className="border border-gray-300 px-4 py-2">{club.presidentContact}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">위치</td>
              <td className="border border-gray-300 px-4 py-2">{club.location}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">홈페이지</td>
              <td className="border border-gray-300 px-4 py-2">
                {club.recruitmentInfo ? (
                  <Link href={club.recruitmentInfo} className="text-blue-500 hover:underline">
                    홈페이지 방문
                  </Link>
                ) : (
                  "x"
                )}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">SNS</td>
              <td className="border border-gray-300 px-4 py-2">
                {club.instagram ? (
                  <p>
                    <span className="font-medium">인스타그램:</span>{' '}
                    <Link href={club.instagram} className="text-blue-500 hover:underline" target="_blank">
                      {club.instagram}
                    </Link>
                  </p>
                ) : (
                  <p>인스타그램: x</p>
                )}
                {club.youtube ? (
                  <p>
                    <span className="font-medium">유튜브:</span>{' '}
                    <Link href={club.youtube} className="text-blue-500 hover:underline" target="_blank">
                      {club.youtube}
                    </Link>
                  </p>
                ) : (
                  <p>유튜브: x</p>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}