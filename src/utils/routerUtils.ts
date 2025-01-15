import router from '@/router';

/**
 * 라우터 함수를 통한 페이지 이동
 * @param pageName 이동할 페이지 이름
 */
export function linkToPage(pageName: string) { 
  router.push({ name: pageName });
}