// 引入字體
import { Inter, Lusitana } from 'next/font/google';

// 取的需要的subset子集
export const inter = Inter({ subsets: ['latin'] });

// 練習建立一個輔助字體Lusitana
export const lusitana = Lusitana({ subsets: ['latin'], weight: '400' });
