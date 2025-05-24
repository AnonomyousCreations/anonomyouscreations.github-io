{
  let Projects = document.getElementById("Projects");

  const StartText = Projects.innerHTML;
  const NewText = "I know its empty, don't judge me &#128532";
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
    
    if (count < NewText.length - 8)
    {
      count += 0.5;
    }
    else
    {
      Projects.innerHTML = `${Projects.innerHTML} &#128532`
      clearInterval(loop);
    }
    
    if (count%1 > 0)
    {
      Projects.innerHTML = `${NewText.slice(0, Math.floor(count))}${Symbols[getRandomInt(0, Symbols.length - 1)]}${Projects.innerHTML.slice(Math.ceil(count), Projects.innerHTML.length)}`;
    }
    else
    {
      Projects.innerHTML = `${NewText.slice(0, count)}${Projects.innerHTML.slice(count, Projects.innerHTML.length)}`;
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
      Projects.innerHTML = `${NewText.slice(0, Math.floor(count))}${Symbols[getRandomInt(0, Symbols.length - 1)]}${StartText.slice(Math.ceil(count), StartText.length)}`;
    }
    else
    {
      Projects.innerHTML = `${NewText.slice(0, count)}${StartText.slice(count, StartText.length)}`;
    }

  }

  Projects.onmouseenter = () => 
  {

    clearInterval(loop);
    loop = setInterval(ConvertTo, 50);
    
  }



  Projects.onmouseleave = () => 
  {
    clearInterval(loop);
    loop = setInterval(ConvertFrom, 50);
  }
}