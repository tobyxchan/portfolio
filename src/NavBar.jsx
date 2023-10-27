import './index.css';

export default function NavBar () {
  return (
    <header className="header">
      <a href="/" className="logo">Toby.</a>

      <nav className="navbar">
        <a href="/" class="active">Home</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/about">About Me</a>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=tobyxchan@gmail.com&tf=cm" target="_blank">Contact</a>
      </nav>
    </header>
  )
}