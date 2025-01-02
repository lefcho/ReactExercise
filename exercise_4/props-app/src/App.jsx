import Student from "./Student.jsx"

function App() {
    return(
        <>
          <Student name="Spogebob" age={30} isStudent={true}/>
          <Student name="Patrick" age={42} isStudent={false}/>
          <Student name="Squidward" age={55} isStudent={true}/>
          <Student name="Sandy" age={23} isStudent={false}/>
          <Student/>
        </>
    );
}

export default App
