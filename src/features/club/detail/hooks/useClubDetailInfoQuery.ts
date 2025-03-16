import { ClubDetailInfo } from '@/src/shared';
import { getClubDetailInfo } from '@/src/features/club/detail/api/getClubDetailInfo';
import { useQuery } from '@tanstack/react-query';

export const useClubDetailInfoQuery = (clubId: string) => {
  return useQuery<ClubDetailInfo | null>({
    queryKey: ['clubDetailInfo', clubId],
    queryFn: () => getClubDetailInfo(clubId),
    staleTime: 1000 * 60 * 5,
    retry: 2,
    refetchOnWindowFocus: false,
    enabled: !!clubId,
  });
};
