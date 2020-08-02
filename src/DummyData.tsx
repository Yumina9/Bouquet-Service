export const ShopDummy = [
  {
    id: 1,
    name: '엘리제플라워',
    location: '청담동 19-36 ,1층',
    florist: '유진 . 유주희',
    description: 'Elysee flower boutique in korea since 2011',
    phone: '02-545-5501',
    instagram: 'https://www.instagram.com/elyseeflower_official/?hl=ko',
    facebook: '',
  },
  {
    id: 2,
    name: '원스플라워',
    location: '서울특별시 서초구 방배로20길 33 1층 102호',
    florist: '송하나',
    description: "one's forest | •꽃디자인•조경•공간장식•",
    phone: '010-3907-7070',
    instagram: 'http://instagram.com/onesflower',
    facebook: '',
  },
  {
    id: 3,
    name: 'shiningbloom',
    location: '서울시 동대문구 장한로30길 29 1층',
    florist: '윤현정',
    description: 'Flower Boutique & School',
    phone: '010-6202-5621',
    instagram: 'https://www.instagram.com/shiningbloom_flower/',
    facebook: '',
  },
];

export const FlowerDummy = [
  {
    id: 1,
    name: '장미',
    means: '사랑,욕망,절정,기쁨,아름다움',
    season: '5~6월',
    color: '빨간색',
  },
  {
    id: 2,
    name: '튤립',
    means: '애정, 배려',
    season: '4~5월',
    color: '분홍색',
  },
  {
    id: 3,
    name: '수국',
    means: '소녀의 꿈',
    season: '6~7월',
    color: '붉은색',
  },
];

export type BouquetType = {
  id: number;
  title: string;
  img: string;
};

export const BouquetDummy: BouquetType[] = [
  {
    id: 1,
    img:
      'http://blogfiles.naver.net/MjAyMDA1MjJfMjE5/MDAxNTkwMTMxNTYxMjUy.gsE8UPlq5hkm_ttGNIXYbM9_fwWi0IFcQStpEJV8G-Ug.QPQhZcvZoyZEc4gODyFpK03tYFXFLLKB5xYEaZYW_UYg.JPEG.onlandflower/%BF%C0%B4%C3%B1%D7%B8%AE%B0%ED%B2%C9_-_%B8%C1%B0%ED%C6%AB%B8%B3_%B4%EB%C7%FC%B2%C9%B4%D9%B9%DF_%2834%29.jpg',
    title: '튤립',
  },
  {
    id: 2,
    img:
      'http://blogfiles.naver.net/MjAyMDAyMjlfMTYw/MDAxNTgyOTg0NTkwNDM1.-5TPVGMmECT_dCRHcvBUsJMj81QFMSfY2Sn9MC-iKSkg.JxEdZPeH0e-8QSy_GBpzaPT5AsG-RReWZbV34v2cx8Ug.JPEG.blossomh02/KakaoTalk_20200229_212426010.jpg',
    title: '장미',
  },
  {
    id: 3,
    img:
      'http://blogfiles.naver.net/MjAxOTA3MjhfNDcg/MDAxNTY0MjgyMDgzODM4.uygYAXCiGifjK3sWm0WaTupWudfhmCJ_u8siTzgiGhsg.qD1dXUlbRAse8yey2tRATck8l3NIt4tILZbyEUDpubgg.JPEG.ny_flower_/IMG_4585.jpg',
    title: '수국',
  },
];
