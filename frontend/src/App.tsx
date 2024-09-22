import { gql, useQuery } from '@apollo/client'
import './App.css'

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`;



export const Books = () => {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <p>ロード中・・・</p>
  if (error) return <p>エラー</p>
  
  return data.test.map(({title, author}) => (
    <div key={title}>
      <p>
        {author}：{title}
      </p>
    </div>
  ))
}

function App() {
  return (
    <>
      <h2>GraphQL Client</h2>
      <Books />
    </>
  )
}

export default App
