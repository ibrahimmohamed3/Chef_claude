// import { useState } from "react";
// function Form() {
//   //   function signUp(formData) {
//   //     const data = Object.fromEntries(formData);
//   //     console.log(data);
//   //   }

//   //   return (
//   //     <form action={signUp}>
//   //       <label htmlFor="first_name">First Name:</label>
//   //       <input type="text" name="first_name" />

//   //       <label htmlFor="last_name">Last Name:</label>
//   //       <input type="text" name="last_name" />

//   //       <label htmlFor="email">Email:</label>
//   //       <input type="email" name="email" />

//   //       <label htmlFor="password">Password:</label>
//   //       <input type="password" name="password" />

//   //       <label htmlFor="radio">Male</label>
//   //       <input type="radio" value="Male" name="radio" />

//   //       <label htmlFor="radio">Female</label>
//   //       <input type="radio" value="Female" name="radio" />
//   //       <button>Submit</button>
//   //     </form>
//   //   );
//   const [messages, setMessages] = useState([]);
//   /**
//    * Challenge:
//    * - If there are no unread messages, display "You're all caught up!"
//    * - If there's exactly 1 unread message, it should read "You have
//    *   1 unread message" (singular)
//    * - If there are > 1 unread messages, display "You have <n> unread
//    *   messages" (plural)
//    */
//   return (
//     <div>
//       {messages.length === 0 ? ( <h1>You're all caught up!</h1>)
//        : messages.length === 1 ? ( <h1>You have 1 unread message</h1>) : 
//        (<h1>You have {messages.length} messages</h1>)}
//     </div>
//   );
// }

// export default Form;
