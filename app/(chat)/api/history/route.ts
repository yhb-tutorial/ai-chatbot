import { auth } from '@/app/(auth)/auth';
import { getChatsByUserId } from '@/lib/db/queries';

export async function GET() {
  // const session = await auth();

  // if (!session || !session.user) {
  //   return Response.json('Unauthorized!', { status: 401 });
  // }

  // biome-ignore lint: Forbidden non-null assertion.
  // const chats = await getChatsByUserId({ id: session.user.id! });
  const chats = [
    {
      id: '69f8900b-1faa-40f3-9ae2-2d57b129b719',
      createdAt: new Date('2024-11-21T05:53:56.885Z'),
      title: 'Simple Greeting',
      userId: '5a0e5e35-d08c-45fa-9bb9-04a61b2fc306'
    },
    {
      id: '15f5cebf-5861-4db7-a233-b61fbd29352d',
      createdAt: new Date('2024-11-21T05:47:08.665Z'),
      title: '北京天气情况查询',
      userId: '5a0e5e35-d08c-45fa-9bb9-04a61b2fc306'
    },
    {
      id: '8dba00bc-83ef-48e9-858b-40c03b4cbd14',
      createdAt: new Date('2024-11-21T05:46:30.413Z'),
      title: '北京天气情况查询',
      userId: '5a0e5e35-d08c-45fa-9bb9-04a61b2fc306'
    },
    {
      id: '07800eb6-3069-45dc-a07e-7924ef8d39c5',
      createdAt: new Date('2024-11-21T05:46:16.960Z'),
      title: 'Simple Greeting',
      userId: '5a0e5e35-d08c-45fa-9bb9-04a61b2fc306'
    },
    {
      id: '9ca7e574-de04-4dbb-b5ed-5c7d9b69e745',
      createdAt: new Date('2024-11-21T05:45:41.571Z'),
      title: 'Current Weather in San Francisco Inquiry',
      userId: '5a0e5e35-d08c-45fa-9bb9-04a61b2fc306'
    },
    {
      id: 'eadc50d6-803c-4689-96a3-da740a42d4ca',
      createdAt: new Date('2024-11-19T12:06:47.303Z'),
      title: '生成Markdown格式的内容',
      userId: '5a0e5e35-d08c-45fa-9bb9-04a61b2fc306'
    },
    {
      id: '318320ab-160d-4cfa-b083-05394618b500',
      createdAt: new Date('2024-11-19T12:06:21.011Z'),
      title: '询问图片内容是什么',
      userId: '5a0e5e35-d08c-45fa-9bb9-04a61b2fc306'
    },
    {
      id: '4b769eaa-4e65-4f9a-8617-b4a0e80bdad5',
      createdAt: new Date('2024-11-19T12:02:42.079Z') ,
      title: '北京天气情况查询',
      userId: '5a0e5e35-d08c-45fa-9bb9-04a61b2fc306'
    },
    {
      id: '2a5596ae-9860-49f8-aaf0-68a50fde7690',
      createdAt: new Date('2024-11-19T12:01:39.774Z'),
      title: 'Simple Greeting',
      userId: '5a0e5e35-d08c-45fa-9bb9-04a61b2fc306'
    },
    {
      id: 'e5f63536-0578-4794-94a2-51e8178550de',
      createdAt: new Date('2024-11-19T09:56:19.164Z'),
      title: 'Sample TypeScript Code Generation Request',
      userId: '5a0e5e35-d08c-45fa-9bb9-04a61b2fc306'
    },
    {
      id: '5fc0cc41-6ce1-4538-9f8f-22136233193d',
      createdAt: new Date('2024-11-19T09:55:50.380Z') ,
      title: 'Sample TypeScript Code Generation Request',
      userId: '5a0e5e35-d08c-45fa-9bb9-04a61b2fc306'
    },
    {
      id: '7c6cf4cc-dd28-465b-8acb-351923c54713',
      createdAt: new Date('2024-11-19T09:55:36.634Z') ,
      title: 'Sample TypeScript Code Generation Request',
      userId: '5a0e5e35-d08c-45fa-9bb9-04a61b2fc306'
    },
    {
      id: 'f4a21436-23cb-4e8f-8cd3-27b3852f5e2e',
      createdAt: new Date('2024-11-19T09:55:21.606Z'),
      title: 'Creating Sample Markdown Examples',
      userId: '5a0e5e35-d08c-45fa-9bb9-04a61b2fc306'
    },
    {
      id: '78da4320-231e-48c5-a4d5-92ab86b84806',
      createdAt: new Date('2024-11-19T09:37:47.033Z'),
      title: 'Current Weather in San Francisco Inquiry',
      userId: '5a0e5e35-d08c-45fa-9bb9-04a61b2fc306'
    },
    {
      id: 'e2f70999-c065-4ea5-85a3-63ec1c9f06b2',
      createdAt: new Date('2024-11-19T09:37:34.967Z'),
      title: 'Simple Greeting',
      userId: '5a0e5e35-d08c-45fa-9bb9-04a61b2fc306'
    }
  ];
  console.log(chats);
  return Response.json(chats);
}
