import styled from 'styled-components';
import PostList from './exercise2/components/PostList'
import { posts } from './posts.json'

const Title = styled.h2`
  font-size: 24px;
  color: red;
  text-align: center;
`

const Button = styled.button`
  display: inline-block;
  width: 100px;
  heigth: 80px;
  padding: 10px;
  background-color: green;
  color: white;
`;

const ActiveButton = styled(Button)`
  background-color: blue;
`

function App() {
  return (
    <>
      <Button>Primary</Button>
      <ActiveButton>Secondary</ActiveButton>
      <Title>Котик на диете - несчастный котик</Title>
      <PostList posts={posts} />
    </>
  );
}

export default App;
