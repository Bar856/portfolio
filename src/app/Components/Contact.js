export default function Contact() {
    return (
      <main id="contact"  className="min-h-screen flex flex-col center">
        <h1>Say Hi!</h1>
        <form className="flex flex-col">
          <input className="basis-1/4" placeholder="First Name" type="text"></input>
          <input className="basis-1/4" placeholder="Last Name" type="text"></input>
          <input className="basis-1/4" placeholder="Email Address" type="text"></input>
          <input className="basis-1/4" placeholder="Phone Number" type="text"></input>
          <textarea className="basis-1/1" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </main>
    )
 }
  