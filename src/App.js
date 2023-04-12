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
    <><header class="w-full text-center p-4 bg-space-800 text-cape-cod-100">
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
      <header className='h-min-screen'>
        {/* Background image */}
        <div
          className="overflow-hidden bg-no-repeat bg-top bg-cover bg-mobile-hero lg:bg-desktop-hero"
          style={{
            backgroundPosition: "50%",
            height: "90vh"
          }}
        >
          <div
            className=" top-0 right-0 bottom-0 left-0 w-full h-full"
          >
            <div className="flex justify-center items-center h-full" style={{backgroundColor: "rgba(0, 0, 0, 0.4)"}}>
              <div className="text-center text-white px-6 md:px-12">
                <h1
                  className="text-5xl mt-0 mb-6 text-cape-cod-50 transition-opacity opacity-100"
                  style={{ fontSize: "8vw", textTransform: "uppercase" }}
                >
                  Heredia/Gebhart
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Background image */}
      </header>
      <div className='bg-stark-100 pb-10 h-min-screen
    '>
        <h1 className='text-center py-10 text-7xl'>Meet the Candidates</h1>

        <div className="lg:pt-8 mx-auto lg:w-8/12 w-full">
          <div className="grid grid-cols-1 rounded-md shadow-lg sm:grid-cols-2">
            <button style={Bstyles} onClick={handleBClick}>
              <div className="border-bottom border-right flex flex-col items-center justify-center p-4 pb-6">
                <img className="h-auto rounded-3xl w-36" src="Brad.webp" alt="Brad Heredia" />
                <p className="font-medium leading-5 mt-4 text-white text-xl">Brad Heredia</p>
                <p className="font-medium leading-5 mt-4 text-white text-xl">President</p>
              </div>
            </button>
            <button style={Lstyles} onClick={handleLClick}>
              <div className="flex flex-col h-full items-center justify-center p-4 pb-6">
                <img className="h-auto rounded-3xl w-36" src="Lila.webp" alt="Lila Gebhart" />
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
      <div className='bg-stark-200/70 pb-10'><h1 className='text-center lg:pl-10 lg:my-auto pt-5 text-7xl'>Our Message</h1>
        <p className='px-8 my-auto mt-10 lg:px-36 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in blandit risus. Ut bibendum dignissim auctor. Nullam accumsan egestas pellentesque. Quisque tincidunt augue non tortor semper tristique. Sed non tellus scelerisque, gravida leo finibus, viverra enim. Ut eu iaculis est. Donec nec pellentesque leo. Suspendisse eu lacinia neque. Nullam tristique posuere justo, vel aliquam nunc iaculis non.

          Ut sed urna in urna tempor venenatis sed eget risus. Sed consectetur tortor auctor tellus semper tincidunt sit amet id neque. Phasellus ac consequat arcu. Curabitur diam nunc, dapibus vel erat id, feugiat condimentum lectus. Vivamus suscipit, neque sit amet scelerisque eleifend, lorem quam viverra metus, sit amet commodo justo metus in justo. Nullam auctor viverra est, ac pharetra est convallis eu. Fusce condimentum accumsan turpis, vitae suscipit ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Proin ut eleifend arcu. Vestibulum dapibus eleifend enim. Integer nec gravida dolor, non lobortis erat. Cras pretium faucibus pellentesque.

          Fusce quis rhoncus felis. Vestibulum eu lacus vel ante mattis molestie quis et purus. Morbi elementum sem eu elit commodo ultrices. Vivamus ornare auctor lacus non consectetur. Integer pharetra ornare ex a ultrices. Nam viverra commodo gravida. Praesent ullamcorper dolor in ligula feugiat tempor.

          Cras aliquet scelerisque blandit. Nullam tristique purus non diam dictum, vel sodales ligula tincidunt. Fusce vitae facilisis elit, vestibulum faucibus velit. Nulla varius malesuada porta. Donec vestibulum dignissim risus at ultricies. Vestibulum ut elit malesuada, venenatis nunc sit amet, pellentesque mauris. Mauris iaculis malesuada fringilla. Cras convallis, risus id imperdiet auctor, nisl tortor ornare enim, nec luctus est elit a nisi. Nam fringilla ullamcorper enim, sodales laoreet lorem blandit nec. Nullam venenatis orci orci, ac fermentum lorem venenatis et. Maecenas tristique nisi nec pharetra sodales.

          Sed pharetra at tortor a fermentum. Nam sodales vestibulum cursus. Aliquam erat volutpat. Fusce tincidunt turpis arcu, at finibus tortor rutrum sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae massa nisi. Maecenas eget ornare nisi, vel congue magna. Cras tempus tempor interdum. Duis ac aliquam nisi. Maecenas vestibulum, ex vel efficitur vestibulum, leo libero blandit leo, ut rutrum augue urna faucibus diam. Nulla et neque blandit turpis varius imperdiet eget in tortor. Cras placerat fermentum nisl a rutrum. In euismod leo eu dui pharetra, eu condimentum mi sagittis. Cras nec commodo ex. Nullam diam leo, cursus congue congue in, congue commodo nunc.

          Morbi sit amet laoreet nisi, eget euismod libero. In felis nulla, venenatis vitae volutpat quis, feugiat nec neque. Nullam maximus felis ut lorem euismod rutrum. Quisque semper, erat tincidunt fermentum lobortis, tortor quam pulvinar nisi, eget elementum risus sapien id dolor. In odio erat, sodales pulvinar velit vel, vulputate iaculis turpis. Ut sed turpis odio. Vestibulum maximus arcu est, et laoreet orci ultrices quis. Pellentesque id placerat felis, eget placerat nunc. Pellentesque sollicitudin, orci vitae congue accumsan, mi tortor cursus diam, ac rhoncus orci purus sit amet tortor. Suspendisse.</p></div>
          <div className='bg-stark-100 pb-10'><h1 className='text-center lg:pl-10 lg:my-auto pt-5 text-7xl'>Our Executive Order</h1>
        <p className='px-8 my-auto mt-10 lg:px-36 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in blandit risus. Ut bibendum dignissim auctor. Nullam accumsan egestas pellentesque. Quisque tincidunt augue non tortor semper tristique. Sed non tellus scelerisque, gravida leo finibus, viverra enim. Ut eu iaculis est. Donec nec pellentesque leo. Suspendisse eu lacinia neque. Nullam tristique posuere justo, vel aliquam nunc iaculis non.

          Ut sed urna in urna tempor venenatis sed eget risus. Sed consectetur tortor auctor tellus semper tincidunt sit amet id neque. Phasellus ac consequat arcu. Curabitur diam nunc, dapibus vel erat id, feugiat condimentum lectus. Vivamus suscipit, neque sit amet scelerisque eleifend, lorem quam viverra metus, sit amet commodo justo metus in justo. Nullam auctor viverra est, ac pharetra est convallis eu. Fusce condimentum accumsan turpis, vitae suscipit ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Proin ut eleifend arcu. Vestibulum dapibus eleifend enim. Integer nec gravida dolor, non lobortis erat. Cras pretium faucibus pellentesque.

          Fusce quis rhoncus felis. Vestibulum eu lacus vel ante mattis molestie quis et purus. Morbi elementum sem eu elit commodo ultrices. Vivamus ornare auctor lacus non consectetur. Integer pharetra ornare ex a ultrices. Nam viverra commodo gravida. Praesent ullamcorper dolor in ligula feugiat tempor.

          Cras aliquet scelerisque blandit. Nullam tristique purus non diam dictum, vel sodales ligula tincidunt. Fusce vitae facilisis elit, vestibulum faucibus velit. Nulla varius malesuada porta. Donec vestibulum dignissim risus at ultricies. Vestibulum ut elit malesuada, venenatis nunc sit amet, pellentesque mauris. Mauris iaculis malesuada fringilla. Cras convallis, risus id imperdiet auctor, nisl tortor ornare enim, nec luctus est elit a nisi. Nam fringilla ullamcorper enim, sodales laoreet lorem blandit nec. Nullam venenatis orci orci, ac fermentum lorem venenatis et. Maecenas tristique nisi nec pharetra sodales.

          Sed pharetra at tortor a fermentum. Nam sodales vestibulum cursus. Aliquam erat volutpat. Fusce tincidunt turpis arcu, at finibus tortor rutrum sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae massa nisi. Maecenas eget ornare nisi, vel congue magna. Cras tempus tempor interdum. Duis ac aliquam nisi. Maecenas vestibulum, ex vel efficitur vestibulum, leo libero blandit leo, ut rutrum augue urna faucibus diam. Nulla et neque blandit turpis varius imperdiet eget in tortor. Cras placerat fermentum nisl a rutrum. In euismod leo eu dui pharetra, eu condimentum mi sagittis. Cras nec commodo ex. Nullam diam leo, cursus congue congue in, congue commodo nunc.

          Morbi sit amet laoreet nisi, eget euismod libero. In felis nulla, venenatis vitae volutpat quis, feugiat nec neque. Nullam maximus felis ut lorem euismod rutrum. Quisque semper, erat tincidunt fermentum lobortis, tortor quam pulvinar nisi, eget elementum risus sapien id dolor. In odio erat, sodales pulvinar velit vel, vulputate iaculis turpis. Ut sed turpis odio. Vestibulum maximus arcu est, et laoreet orci ultrices quis. Pellentesque id placerat felis, eget placerat nunc. Pellentesque sollicitudin, orci vitae congue accumsan, mi tortor cursus diam, ac rhoncus orci purus sit amet tortor. Suspendisse.</p></div>
          <div className='bg-stark-200/70 pb-20'>
          <h1 className='text-center pt-5 mb-7 text-7xl'>Our Announment Video</h1>
          <video
    className="lg:w-[50vw] m-auto" controls
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
      <p className='px-8 lg:px-36 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in blandit risus. Ut bibendum dignissim auctor. Nullam accumsan egestas pellentesque. Quisque tincidunt augue non tortor semper tristique. Sed non tellus scelerisque, gravida leo finibus, viverra enim. Ut eu iaculis est. Donec nec pellentesque leo. Suspendisse eu lacinia neque. Nullam tristique posuere justo, vel aliquam nunc iaculis non.

        Ut sed urna in urna tempor venenatis sed eget risus. Sed consectetur tortor auctor tellus semper tincidunt sit amet id neque. Phasellus ac consequat arcu. Curabitur diam nunc, dapibus vel erat id, feugiat condimentum lectus. Vivamus suscipit, neque sit amet scelerisque eleifend, lorem quam viverra metus, sit amet commodo justo metus in justo. Nullam auctor viverra est, ac pharetra est convallis eu. Fusce condimentum accumsan turpis, vitae suscipit ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Proin ut eleifend arcu. Vestibulum dapibus eleifend enim. Integer nec gravida dolor, non lobortis erat. Cras pretium faucibus pellentesque.

        Fusce quis rhoncus felis. Vestibulum eu lacus vel ante mattis molestie quis et purus. Morbi elementum sem eu elit commodo ultrices. Vivamus ornare auctor lacus non consectetur. Integer pharetra ornare ex a ultrices. Nam viverra commodo gravida. Praesent ullamcorper dolor in ligula feugiat tempor.

        Cras aliquet scelerisque blandit. Nullam tristique purus non diam dictum, vel sodales ligula tincidunt. Fusce vitae facilisis elit, vestibulum faucibus velit. Nulla varius malesuada porta. Donec vestibulum dignissim risus at ultricies. Vestibulum ut elit malesuada, venenatis nunc sit amet, pellentesque mauris. Mauris iaculis malesuada fringilla. Cras convallis, risus id imperdiet auctor, nisl tortor ornare enim, nec luctus est elit a nisi. Nam fringilla ullamcorper enim, sodales laoreet lorem blandit nec. Nullam venenatis orci orci, ac fermentum lorem venenatis et. Maecenas tristique nisi nec pharetra sodales.

        Sed pharetra at tortor a fermentum. Nam sodales vestibulum cursus. Aliquam erat volutpat. Fusce tincidunt turpis arcu, at finibus tortor rutrum sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae massa nisi. Maecenas eget ornare nisi, vel congue magna. Cras tempus tempor interdum. Duis ac aliquam nisi. Maecenas vestibulum, ex vel efficitur vestibulum, leo libero blandit leo, ut rutrum augue urna faucibus diam. Nulla et neque blandit turpis varius imperdiet eget in tortor. Cras placerat fermentum nisl a rutrum. In euismod leo eu dui pharetra, eu condimentum mi sagittis. Cras nec commodo ex. Nullam diam leo, cursus congue congue in, congue commodo nunc.

        Morbi sit amet laoreet nisi, eget euismod libero. In felis nulla, venenatis vitae volutpat quis, feugiat nec neque. Nullam maximus felis ut lorem euismod rutrum. Quisque semper, erat tincidunt fermentum lobortis, tortor quam pulvinar nisi, eget elementum risus sapien id dolor. In odio erat, sodales pulvinar velit vel, vulputate iaculis turpis. Ut sed turpis odio. Vestibulum maximus arcu est, et laoreet orci ultrices quis. Pellentesque id placerat felis, eget placerat nunc. Pellentesque sollicitudin, orci vitae congue accumsan, mi tortor cursus diam, ac rhoncus orci purus sit amet tortor. Suspendisse.</p>
    </div>
  );
}

function Brad() {
  return (
    <div>
      <p className='px-8 lg:px-36 text-xl'>Suspendisse sit amet tortor ac sapien molestie condimentum a eget ligula. Cras congue justo eu aliquet accumsan. Praesent nulla urna, viverra ac faucibus et, aliquam ut quam. Duis convallis, odio at scelerisque hendrerit, turpis massa vehicula turpis, non pellentesque diam mauris maximus tortor. Mauris ipsum sapien, fermentum vel tellus ac, fringilla aliquet augue. Fusce tincidunt venenatis neque, a aliquet nisi bibendum id. Quisque ornare scelerisque dolor, finibus aliquet justo finibus eu. Cras tristique varius arcu et malesuada. Proin mauris ante, iaculis non ante eu, ultricies fringilla sapien. Donec arcu tellus, interdum non efficitur vitae, vestibulum a erat. Aliquam hendrerit porta nulla, sed finibus sapien accumsan ut. Ut id lacus diam. Praesent imperdiet augue et quam posuere, sed sollicitudin tortor tincidunt.

        Nunc vestibulum sem non erat semper rutrum. Quisque pharetra, sem vel pellentesque auctor, tortor elit ornare quam, et scelerisque ante nisl non massa. Duis maximus, dui eget fermentum commodo, enim turpis consequat nulla, sit amet pretium orci dolor at mi. Quisque auctor, magna vitae pellentesque semper, lectus lacus blandit nisl, eu semper velit tellus sed lorem. Vestibulum varius ipsum ligula, sed sagittis augue consequat sed. Curabitur commodo nunc at lacus blandit accumsan. Sed metus metus, eleifend eget justo ut, convallis fringilla enim. In ac metus at metus dictum volutpat nec eget magna. Cras et risus a quam maximus pulvinar eu eu tortor.

        Ut vulputate eleifend faucibus. Vestibulum vel tincidunt lacus. Aenean quis augue libero. Maecenas malesuada pulvinar diam. Morbi quis diam ut lectus dictum rhoncus eget at odio. Nulla et finibus odio. Nam convallis augue eu posuere fringilla.

        In vitae sem posuere, lacinia tellus in, venenatis lectus. Mauris vel dui eu sem pellentesque pharetra vulputate sit amet tellus. Fusce eu molestie ex, et imperdiet lectus. Donec sed condimentum magna, eu ultricies massa. Nulla placerat, augue et posuere molestie, urna nulla hendrerit justo, vel faucibus eros sem eu quam. Aliquam eu quam risus. Phasellus iaculis luctus sagittis. Donec libero enim, convallis non porta ut, pharetra non lorem. Proin semper, tortor nec laoreet faucibus, dolor dui auctor lorem, sollicitudin luctus nunc nunc eu erat.

        Donec dignissim quam id porttitor placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula accumsan egestas. Morbi nibh mi, vulputate et enim consequat, pharetra dictum felis. Proin odio nisl, lacinia a augue ut, tincidunt commodo enim. Donec luctus dignissim ipsum, sed fermentum velit egestas et. Proin at odio vitae sapien faucibus blandit.

        Nam ut suscipit lorem. Donec volutpat facilisis fermentum. Suspendisse id volutpat nulla. Suspendisse id libero imperdiet, feugiat dolor et, feugiat nulla. Quisque ex mauris, tincidunt at faucibus eget, posuere ac felis. Proin enim metus, sodales eu euismod in, lobortis at nisl. Sed eget felis nec tortor efficitur eleifend sed sed velit. Cras a efficitur mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas vel convallis odio, vitae cursus felis. Vestibulum sed risus eros. Mauris vitae ligula sodales, laoreet risus vitae, iaculis mauris. Duis eleifend ex augue, at dictum quam hendrerit sed. Vivamus eget pretium lacus. Nulla ullamcorper sodales.</p>
    </div>
  );
}

export default App;
