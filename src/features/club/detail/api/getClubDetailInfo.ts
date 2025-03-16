export const getClubDetailInfo = async (clubId: string)=> {
  try {
    if (!clubId) {
      throw new Error('클럽 ID가 제공되지 않았습니다.');
    }

    const response = await fetch(`/api/clubs/${clubId}`, {
      method: 'GET',
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '동아리 상세 정보를 불러오는데 실패했습니다.');
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : '서버 오류가 발생했습니다.',
    };
  }
};