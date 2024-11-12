import { Stack, Link } from 'expo-router';
import { View } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { Logo } from '~/components/Logo';
import MessageCardList from '~/components/MessageCard/MessageCardList';
import { ScreenContent } from '~/components/ScreenContent';
import SearcInput from '~/components/SearcInput';

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => <Logo />,
          headerTitleAlign: 'center',
        }}
      />
      <Container>
        <SearcInput />
        <MessageCardList />
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>
      </Container>
    </>
  );
}