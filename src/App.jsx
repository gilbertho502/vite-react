import { useFetch } from "./useFetch"
function App() {

  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div className="App">
      <h1>Fetch like a Pro</h1>
      {/* <button onClick={handleCancelRequest}>Cancel Request</button> */}
      <div className="card">
        <ul>
          {error && <li>{error}</li>}
          {loading && <li>Loading...</li>}
          {data?.map((user)=> (
            <>
            {/* <h1 >{user.username}</h1> */}
            <li key={user.id}>{user.name}</li>
            
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
