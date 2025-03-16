export interface ParamsProps {
  params: Promise<{ clubId: string }>;
}

export interface Club {
  id: number;
  name: string;
  category: string;
  isRecruiting: boolean;
}

export interface ClubDetailInfo {
  id: number;
  category: string;
  description: string;
  establishedYear: string;
  imageUrl?: string;
  instagram?: string;
  youtube?: string;
  isRecruiting: boolean;
  location: string;
  memberCount: number;
  name: string;
  subName: string;
  presidentContact: string;
  recruitmentId: string;
  recruitmentInfo: string;
}
