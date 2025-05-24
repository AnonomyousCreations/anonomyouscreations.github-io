{
  let Name = document.getElementById("Name");

  const StartText = Name.innerHTML;
  const NewText = "Software Engineer";
  let loop;
  let conversion;

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
      Name.innerHTML = `${NewText.slice(0, Math.floor(count))}${Symbols[getRandomInt(0, Symbols.length - 1)]}${Name.innerHTML.slice(Math.ceil(count), Name.innerHTML.length)}`;
    }
    else
    {
      Name.innerHTML = `${NewText.slice(0, count)}${Name.innerHTML.slice(count, Name.innerHTML.length)}`;
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
      Name.innerHTML = `${NewText.slice(0, Math.floor(count))}${Symbols[getRandomInt(0, Symbols.length - 1)]}${StartText.slice(Math.ceil(count), StartText.length)}`;
    }
    else
    {
      Name.innerHTML = `${NewText.slice(0, count)}${StartText.slice(count, StartText.length)}`;
    }

  }

  Name.onmouseenter = () => 
  {

    clearInterval(loop);
    loop = setInterval(ConvertTo, 50);
    
  }



  Name.onmouseleave = () => 
  {
    clearInterval(loop);
    loop = setInterval(ConvertFrom, 50);
  }
}