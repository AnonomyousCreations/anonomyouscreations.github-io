{
  let Experience = document.getElementById("Experience");
  const Coffee = document.getElementById("Coffee");

  let StartText = Experience.innerHTML;
  const NewText = "Uhhhhhhhhhhhhhh, Coffee?";

  let loop;
  let count = 0;
  let Reset;

  const Responses = ["Nope? okay.", "Okay... Guess not.", "Aw man, it was warm too."]
  const Symbols = ["&#9608", "&#9628", "&#9630", "&#9625", "&#9626"];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function ConvertTo()
  {
    
    if (count < NewText.length)
    {
      count += 0.5;
    }
    else
    {
      clearInterval(loop);
    }
    
    if (count == NewText.length - 7)
    {
      Coffee.classList.remove("CoffeeExit");
      setTimeout( ()=>{Coffee.classList.add("CoffeeEnter")}, 100)
      StartText = Responses[getRandomInt(0, Responses.length - 1)]
    }

    if (count%1 > 0)
    {
      Experience.innerHTML = `${NewText.slice(0, Math.floor(count))}${Symbols[getRandomInt(0, Symbols.length - 1)]}${Experience.innerHTML.slice(Math.ceil(count), Experience.innerHTML.length)}`;
    }
    else
    {
      Experience.innerHTML = `${NewText.slice(0, count)}${Experience.innerHTML.slice(count, Experience.innerHTML.length)}`;
    }

  }

  function ConvertFrom()
  {

    if (count > 0)
    {
      count -= 0.5;
    }
    else
    {
      clearInterval(loop);
    }
    
    if (count%1 > 0)
    {
      Experience.innerHTML = `${NewText.slice(0, Math.floor(count))}${Symbols[getRandomInt(0, Symbols.length - 1)]}${StartText.slice(Math.ceil(count), StartText.length)}`;
    }
    else
    {
      Experience.innerHTML = `${NewText.slice(0, count)}${StartText.slice(count, StartText.length)}`;
    }

  }

  Experience.onmouseenter = () => 
  {

    clearInterval(loop);
    loop = setInterval(ConvertTo, 50);
    clearTimeout(Reset);
    
  }



  Experience.onmouseleave = () => 
  {
    Coffee.classList.remove("CoffeeEnter");
    setTimeout( () => {Coffee.classList.add("CoffeeExit");}, 100)
    
    clearInterval(loop);
    loop = setInterval(ConvertFrom, 50);
    Reset = setTimeout( () => {StartText = "Experience"; Experience.innerHTML = StartText;}, 10000 )
  }
}