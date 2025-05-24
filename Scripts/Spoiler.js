window.onload = () =>
{

  let Spoilers = document.getElementsByClassName("Covered");

  for (let i = 0; i < Spoilers.length; i++)
  {
    let HoverEvent;
    const Button = Spoilers[i];

    Button.onmouseenter = () =>
    {
      HoverEvent = setTimeout( () => { Button.classList.remove("Covered"); }, 500 );
    };
    
    Button.onmouseleave = () => { clearTimeout(HoverEvent); };
    
  }
}
