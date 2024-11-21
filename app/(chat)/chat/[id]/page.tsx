import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import { auth } from '@/app/(auth)/auth';
import { Chat as PreviewChat } from '@/components/chat';
import { DEFAULT_MODEL_NAME, models } from '@/lib/ai/models';
import { getChatById, getMessagesByChatId } from '@/lib/db/queries';
import { convertToUIMessages } from '@/lib/utils';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;
  // const chat = await getChatById({ id });

  // if (!chat) {
  //   notFound();
  // }

  // const session = await auth();

  // if (!session || !session.user) {
  //   return notFound();
  // }

  // if (session.user.id !== chat.userId) {
  //   return notFound();
  // }

  // const messagesFromDb = await getMessagesByChatId({id,});
  const messagesFromDb = [{"id":"e06fb851-4738-4ecd-a473-ab2f882943e2","chatId":"07800eb6-3069-45dc-a07e-7924ef8d39c5","role":"user","content":"hi","createdAt":"2024-11-21T05:46:16.962Z"},{"id":"66a40cd8-534d-4c94-bfc7-afe800f0c9fb","chatId":"07800eb6-3069-45dc-a07e-7924ef8d39c5","role":"assistant","content":[{"type":"text","text":"Hello! How can I assist you today?"}],"createdAt":"2024-11-21T05:46:17.977Z"}]

  const cookieStore = await cookies();
  const modelIdFromCookie = cookieStore.get('model-id')?.value;
  const selectedModelId =
    models.find((model) => model.id === modelIdFromCookie)?.id ||
    DEFAULT_MODEL_NAME;

  return (
    <PreviewChat
      // id={chat.id}
      id={id}
      initialMessages={convertToUIMessages(messagesFromDb as any)}
      selectedModelId={selectedModelId}
    />
  );
}
