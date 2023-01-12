import { useState } from "react";

export function AgeCounter(props) {
  //   let age = 28;
  //  variables are not reactive, so we need to use states  instead
  
  const [age, setAge] = useState(28);

  function increaseAge() {
    setAge(age + 1);
  }
  return (
    <div>
      <button onClick={increaseAge}>Click here to increase the age</button>
      <p>You are {age} years old!!</p>
    </div>
  );
}
