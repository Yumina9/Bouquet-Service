export const ShopDummy = [
  {
    shop_id: 1,
    shop_name: '엘리제플라워',
    shop_location: '청담동 19-36 ,1층',
    shop_florist: '유진 . 유주희',
    shop_description: 'Elysee flower boutique in korea since 2011',
    shop_phone: '02-545-5501',
    shop_instagram: 'https://www.instagram.com/elyseeflower_official/?hl=ko',
    shop_facebook: '',
  },
  {
    shop_id: 2,
    shop_name: '원스플라워',
    shop_location: '서울특별시 서초구 방배로20길 33 1층 102호',
    shop_florist: '송하나',
    shop_description:
      "one's forest | •꽃디자인•조경•공간장식•",
    shop_phone: '010-3907-7070',
    shop_instagram: 'http://instagram.com/onesflower',
    shop_facebook: '',
  },
  {
    shop_id: 3,
    shop_name: 'shiningbloom',
    shop_location: '서울시 동대문구 장한로30길 29 1층',
    shop_florist: '윤현정',
    shop_description: 'Flower Boutique & School',
    shop_phone: '010-6202-5621',
    shop_instagram: 'https://www.instagram.com/shiningbloom_flower/',
    shop_facebook: '',
  },
];

export const FlowerDummy = [
  {
    flower_id: 1,
    flower_name: '장미',
    flower_means: '사랑,욕망,절정,기쁨,아름다움',
    flower_season: '5~6월',
    flower_color: '빨간색',
  },
  {
    flower_id: 2,
    flower_name: '튤립',
    flower_means: '애정, 배려',
    flower_season: '4~5월',
    flower_color: '분홍색',
  },
  {
    flower_id: 3,
    flower_name: '수국',
    flower_means: '소녀의 꿈',
    flower_season: '6~7월',
    flower_color: '붉은색',
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
