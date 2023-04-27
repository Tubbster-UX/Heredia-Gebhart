import './App.css';
import { useState } from 'react';

function App() {
  const [isLShown, setIsLilaShown] = useState(false);
  const [isBShown, setIsBradShown] = useState(true);

  const handleLClick = event => {
    // 👇️ toggle shown state
    setIsLilaShown(true);
    setIsBradShown(false);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  const handleBClick = event => {
    // 👇️ toggle shown state
    setIsLilaShown(false);
    setIsBradShown(true);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  const BactiveStyles = {
    backgroundColor: '#fdd8ab',
  };

  const BinactiveStyles = {
    backgroundColor: '#feedd6',
    color: 'black'
  };

  const LactiveStyles = {
    backgroundColor: '#fdd8ab',
  };

  const LinactiveStyles = {
    backgroundColor: '#feedd6',
    color: 'black'
  };

  const Bstyles = isBShown ? BactiveStyles : BinactiveStyles;

  const Lstyles = isLShown ? LactiveStyles : LinactiveStyles;

  return (
    <><header className="w-full text-center p-4 bg-space-800 text-cape-cod-100">
      <a
        className="flex items-center"
        href="#nav"
      >
        <img
          src="hg-logo.svg"
          style={{ height: 150 }}
          alt=""
          loading="lazy"
        />
        <span className="font-medium" style={{ fontSize: "150%" }}>
          Heredia/Gebhart <br />{" "}
          <span style={{ fontStyle: "italic" }}>For President</span>
        </span>
      </a></header>
      <main>
      <header class="home-hero" role="banner">
  <video autoPlay className='hidden md:block z-5 lg:block' id="heroVideo" loop muted poster="https://media.graphassets.com/X4lSfHnBQeGwpbs7D5MH">
	<source src="https://media.graphassets.com/SKaiwvtpToiKeR9q18nc" type="video/mp4" />
  </video>
  <img alt="poster image mobile" class="poster img-fluid mx-auto block md:hidden lg:hidden" src="https://media.graphassets.com/X4lSfHnBQeGwpbs7D5MH" />
</header>
      <div className='bg-stark-100 pb-10 h-min-screen
    '>
        <h1 className='text-center py-10 text-7xl'>Meet the Candidates</h1>

        <div className="lg:pt-8 mx-auto lg:w-8/12 w-full">
          <div className="grid grid-cols-1 rounded-md shadow-lg sm:grid-cols-2">
            <button style={Bstyles} onClick={handleBClick}>
              <div className="border-bottom border-right flex flex-col items-center justify-center p-4 pb-6">
                <img className="h-auto rounded-3xl w-36" src="https://media.graphassets.com/QGfslDFVS1O8hXio3s4g" alt="Brad Heredia" />
                <p className="font-medium leading-5 mt-4 text-white text-xl">Brad Heredia</p>
                <p className="font-medium leading-5 mt-4 text-white text-xl">President</p>
              </div>
            </button>
            <button style={Lstyles} onClick={handleLClick}>
              <div className="flex flex-col h-full items-center justify-center p-4 pb-6">
                <img className="h-auto rounded-3xl w-36" src="https://media.graphassets.com/OuLX4aBRROrLhfxIb7XA" alt="Lila Gebhart" />
                <p className="font-medium leading-5 mt-4 text-white text-xl">Lila Gebhart</p>
                <p className="font-medium leading-5 mt-4 text-white text-xl">Vice President</p>
              </div>
            </button>
          </div>
        </div>


        {/* 👇️ show elements on click */}
        {isBShown && (
          <div>
            <h1 className='text-center my-4 text-4xl'>About Brad Heredia</h1>
          </div>
        )}

        {/* 👇️ show component on click */}
        {isBShown && <Brad />}

        {/* 👇️ show elements on click */}
        {isLShown && (
          <div>
            <h1 className='text-center my-4 text-4xl'>About Lila Gebhart</h1>
          </div>
        )}

        {/* 👇️ show component on click */}
        {isLShown && <Lila />}
      </div>
      <div className='bg-stark-100 pb-10'><h1 className='text-center lg:pl-10 lg:my-auto pt-5 text-7xl'>Our Message</h1>
        <p className='px-8 my-auto text-center mt-10 lg:px-36 text-xl'>Coming Soon!</p></div>
      <div className='bg-stark-200/70 pb-10'><h1 className='text-center lg:pl-10 lg:my-auto pt-5 text-7xl'>Our Message Sneak Peek</h1>
        <p className='px-8 my-auto text-center mt-10 lg:px-36 text-xl'>          <video
    className="lg:w-[50vw] m-auto" poster='https://media.graphassets.com/cJb616vSQir0Gjjq8wyw' controls
    src="https://media.graphassets.com/0YeQXTqEQUi59hlHpiV2"
 ></video></p></div>
          <div className='bg-stark-100 pb-10'><h1 className='text-center lg:pl-10 lg:my-auto pt-5 text-7xl'>Our Executive Order</h1>
        <p className='px-8 my-auto text-center mt-10 lg:px-36 text-xl'>Coming Soon!</p></div>
          <div className='bg-stark-200/70 pb-20'>
          <h1 className='text-center pt-5 mb-7 text-7xl'>Our Announment Video</h1>
          <video
    className="lg:w-[50vw] m-auto" poster='https://media.graphassets.com/ZIFw6m2kS3qdq1z2i2lE' controls
    src="https://media.graphassets.com/7uSKnv3S0ysm81cctJ53"
 ></video>
</div>
          </main>
    </>
  );
}

function Lila() {
  return (
    <div>
      <p className='px-8 text-center lg:px-36 text-xl'>
      Hi there—It’s Lila here :))))

I’m so beyond excited to get to know each and every one of you and for y’all to get to know me. Truly meeting people is one of the most amazing things about running a campaign it’s like I get a small taste of heaven :))

A bit about me I’m from CT and I’ve been blessed to be in teenpact for about 7 years. I love sunsets and driving with my windows down, but most importantly I love learning how to love Jesus and people better.
With that in mind, if you ever need prayer/encouragement or just want to share what the Lord is doing in your life, please don’t hesitate to reach out!!

Thanks for sticking around-love you all :)
      </p>
    </div>
  );
}

function Brad() {
  return (
    <div>
      <p className='px-8 text center lg:px-36 text-xl'>hey hey, what is going on everyone?!? my name is Brad Heredia, i’m so blessed to get to run for president this year!

i am from the wonderful little town of maryville missouri, although kansas city is usually where i call home. City strolls, sports, people, electric guitar, and talking about God are some things i absolutely love.

there are so many more things i would love to hear about from you guys and talk with you about, so please come find me and natcon!!

that’s it from me just for now, PEACE ✌🏽</p>
    </div>
  );
}

export default App;
