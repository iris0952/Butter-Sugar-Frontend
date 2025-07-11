import axios from '@/api/axios';
import type { SectionResponse } from './type';
import type { AxiosResponse } from 'axios';

// 獲取單一課程資料
export const getCourseSections = async (
  courseId: string
): Promise<AxiosResponse<SectionResponse>> => axios.get(`/api/v1/course/${courseId}/section`);

// 獲取課程章節
// export const getOneCourseSections = async (
//   courseId: string
// ): Promise<AxiosResponse<SectionResponse>> => axios.get(`/api/v1/course/${courseId}/section`);
