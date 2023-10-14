import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Posts } from './interfaces/posts-interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  role: 'user' | 'admin' | 'guest' = 'guest';

  postsFakeArray: Posts[] = [
    {
      id: 1,
      title: 'Банановый кекс',
      tags: 'Сладости',
      user: {
        id: 549,
        date: 'Wed Jul 22 2020 10:09:26 GMT+0300 (Москва, стандартное время)',
        name: 'Моисей Носков',
        image:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/253.jpg',
      },
      image: 'https://ea-backend.wckz.space/dist/assets/image/image_1.png',
      body: 'Воздушный и ароматный кекс с сочными кусочками банана, отличный выбор для чаепития или завтрака.',
      timeCooking: 36,
      favorite: false,
    },
    {
      id: 2,
      title: 'Сырный суп с грибами',
      body: 'Ароматный и сытный суп, приготовленный на основе сыра и свежих грибов.',
      tags: 'Горячее',
      user: {
        id: 2160,
        date: 'Sun Jul 05 2020 10:44:34 GMT+0300 (Москва, стандартное время)',
        name: 'Анатолий Кудряшов',
        image:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/813.jpg',
      },
      image: 'https://ea-backend.wckz.space/dist/assets/image/image_2.png',
      timeCooking: 66,
      favorite: false,
    },
    {
      id: 3,
      title: 'Салат Цезарь',
      body: 'Классический американский салат с кусочками куриного мяса, сыром, крутонами и соусом Цезарь. Классический американский салат с кусочками куриного мяса, сыром, крутонами и соусом Цезарь. Классический американский салат с кусочками куриного мяса, сыром, крутонами и соусом Цезарь.',
      tags: 'Закуски',
      user: {
        id: 7389,
        date: 'Sun Dec 25 2022 04:23:11 GMT+0300 (Москва, стандартное время)',
        name: 'Артем Моисеев',
        image:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/40.jpg',
      },
      image: 'https://ea-backend.wckz.space/dist/assets/image/image_3.png',
      timeCooking: 114,
      favorite: true,
    },
    {
      id: 4,
      title: 'Паста Карбонара',
      body: 'Итальянское блюдо с пастой, гуанчиале (или пекорино), яйцами, сыром пармезан и черным перцем',
      tags: 'Быстрое',
      user: {
        id: 4959,
        date: 'Fri Sep 10 2021 10:36:33 GMT+0300 (Москва, стандартное время)',
        name: 'Никифор Маслов',
        image:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/957.jpg',
      },
      image: 'https://ea-backend.wckz.space/dist/assets/image/image_4.png',
      timeCooking: 107,
      favorite: true,
    },
    {
      id: 5,
      title: 'Омлет с овощами',
      body: 'Легкое и питательное блюдо с яйцами и свежими овощами.',
      tags: 'Завтрак',
      user: {
        id: 9271,
        date: 'Wed Oct 27 2021 01:35:51 GMT+0300 (Москва, стандартное время)',
        name: 'Мечислав Медведев',
        image:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/80.jpg',
      },
      image: 'https://ea-backend.wckz.space/dist/assets/image/image_5.png',
      timeCooking: 110,
      favorite: false,
    },
    {
      id: 6,
      title: 'Паста с креветками и шпинатом',
      body: 'Вкусное блюдо из пасты с сочными креветками и ароматным шпинатом.',
      tags: 'Второе',
      user: {
        id: 4724,
        date: 'Wed Apr 22 2020 03:33:57 GMT+0300 (Москва, стандартное время)',
        name: 'Софрон Гаврилов',
        image:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/750.jpg',
      },
      image: 'https://ea-backend.wckz.space/dist/assets/image/image_6.png',
      timeCooking: 80,
      favorite: false,
    },
    {
      id: 7,
      title: 'Тыквенный суп с имбирём',
      body: 'Ароматный и сытный суп на основе тыквы с нотками имбиря.',
      tags: 'Первое',
      user: {
        id: 1979,
        date: 'Sat Jun 03 2023 01:07:29 GMT+0300 (Москва, стандартное время)',
        name: 'Феликс Устинов',
        image:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/21.jpg',
      },
      image: 'https://ea-backend.wckz.space/dist/assets/image/image_7.png',
      timeCooking: 99,
      favorite: false,
    },
    {
      id: 8,
      title: 'Тайский красный карри',
      body: 'Ароматное и острое блюдо из Таиланда с сочным мясом и овощами в кокосовом молоке.',
      tags: 'Острое',
      user: {
        id: 3117,
        date: 'Sun Sep 20 2020 12:33:19 GMT+0300 (Москва, стандартное время)',
        name: 'Евграф Виноградов',
        image:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/209.jpg',
      },
      image: 'https://ea-backend.wckz.space/dist/assets/image/image_8.png',
      timeCooking: 35,
      favorite: false,
    },
    {
      id: 9,
      title: 'Паста с креветками в сливочном соусе',
      body: 'Нежная и ароматная паста с сочными креветками, приготовленная в сливочном соусе.',
      tags: 'Второе',
      user: {
        id: 4794,
        date: 'Sat Dec 03 2022 10:16:24 GMT+0300 (Москва, стандартное время)',
        name: 'Игнатий Филиппов',
        image:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/230.jpg',
      },
      image: 'https://ea-backend.wckz.space/dist/assets/image/image_9.png',
      timeCooking: 21,
      favorite: false,
    },
    {
      id: 10,
      title: 'Тирамису',
      body: 'Итальянский десерт, состоящий из слоев пропитанных кофейным сиропом савоярди, крема из маскарпоне и какао.',
      tags: 'Сладкое',
      user: {
        id: 6985,
        date: 'Tue Sep 08 2020 12:44:01 GMT+0300 (Москва, стандартное время)',
        name: 'Измаил Молчанов',
        image:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1216.jpg',
      },
      image: 'https://ea-backend.wckz.space/dist/assets/image/image_10.png',
      timeCooking: 113,
      favorite: true,
    },
  ];

  getAllPosts(): Observable<Posts[]> {
    //return this.httpClient.get<Posts[]>('https://ea-backend.wckz.space/posts');
    return of(this.postsFakeArray);
  }
}
