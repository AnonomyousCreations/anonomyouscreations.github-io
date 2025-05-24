const Bubble = document.getElementById("Bubble");
const Cat = document.getElementById("CatContainer");

setTimeout( () => {Bubble.classList.add("BubbleEnter"); Cat.classList.add("CatEnter");}, 5000)

let TextBubble = document.getElementById("BubbleText")

let T = "Hello! Welcome to My Portfolio!";

function Typewrite(TargetText, TargetElement, Time) 
{
  let counter = 0;
  let Typing;
  // TargetElement.classList.add("Blink")
  Typing = setInterval( () => 
    {  
      if (counter > TargetText.length)
      {
        clearInterval(Typing);
      }
      TargetElement.innerHTML = TargetText.slice(0, counter)
      counter++;
    }
  , Time)

}

function ExitCat()
{
  Bubble.classList.remove("BubbleEnter");
  setTimeout( () => {Bubble.classList.add("BubbleExit");}, 100) 
  Cat.style.transform = "translateY(0px)"
  Cat.classList.remove("CatEnter")
  setTimeout( () => {Cat.classList.add("CatExit");}, 100) 
  

}

Bubble.onanimationend = (name) =>
{
  Typewrite(T, TextBubble, 100);
  setTimeout( 
    () => {
      const Text2 = "Try hovering over things! <br> Some functions of the page are hidden."
      Typewrite(Text2, TextBubble, 100)
      setTimeout( () => {ExitCat()}, (Text2.length * 100) + 2000)
    }, (T.length * 100) + 2000)

  // ExitCat()
}
