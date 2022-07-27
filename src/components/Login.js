function App() {
    return (
      
        <div className="App">
      
<h1>Logovanje</h1>
                    <form >
                        <label htmlFor="username">Korisničko ime:</label>
                        <input
                            type="text"
                            id="username"                          
                            autoComplete="off"                            
                            required
                        />
                    <br/>
                    <br/>
                        <label htmlFor="password">Šifra:</label>
                        <input
                            type="password"
                            id="password"                            
                            required
                        />
                        <br/>
                        <br/>

  <button >Uloguj se</button>
                    </form>        
          
      </div>  
    );
  }

  export default App;