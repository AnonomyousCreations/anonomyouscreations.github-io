{
  let Introduction = document.getElementById("Introduction")

  const StartText = Introduction.innerHTML;
  const NewText = "Why are you here?";

  let loop;
  let count = 0;

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
    
    if (count%1 > 0)
    {
      Introduction.innerHTML = `${NewText.slice(0, Math.floor(count))}${Symbols[getRandomInt(0, Symbols.length - 1)]}${Introduction.innerHTML.slice(Math.ceil(count), Introduction.innerHTML.length)}`;
    }
    else
    {
      Introduction.innerHTML = `${NewText.slice(0, count)}${Introduction.innerHTML.slice(count, Introduction.innerHTML.length)}`;
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
      Introduction.innerHTML = `${NewText.slice(0, Math.floor(count))}${Symbols[getRandomInt(0, Symbols.length - 1)]}${StartText.slice(Math.ceil(count), StartText.length)}`;
    }
    else
    {
      Introduction.innerHTML = `${NewText.slice(0, count)}${StartText.slice(count, StartText.length)}`;
    }

  }

  Introduction.onmouseenter = () => 
  {

    clearInterval(loop);
    loop = setInterval(ConvertTo, 50);
    
  }



  Introduction.onmouseleave = () => 
  {
    clearInterval(loop);
    loop = setInterval(ConvertFrom, 50);
  }
}